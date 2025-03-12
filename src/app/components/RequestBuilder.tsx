"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Save, Play } from "lucide-react";
import Response from "./Response"; 

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

export default function RequestBuilder() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState<any[]>([]);
  const [params, setParams] = useState<any[]>([]);
  const [body, setBody] = useState<string>("");
  const [authType, setAuthType] = useState("none");
  const [authToken, setAuthToken] = useState("");
  const [tests, setTests] = useState("");
  const [response, setResponse] = useState<any>(null); // ✅ Response state ko handle karne ke liye

  const handleSend = async () => {
    if (!url) {
      alert("Please enter a valid URL");
      return;
    }

    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...Object.fromEntries(headers.map((h) => [h.key, h.value])),
        },
        body: JSON.stringify({
          method,
          url,
          params: Object.fromEntries(params.map((p) => [p.key, p.value])),
          body,
          auth: authToken,
          tests,
        }),
      });

      const data = await res.json();
      setResponse(data); // ✅ Response ko state me set kar rahe hai
    } catch (error) {
      console.error("Error:", error);
      setResponse({
        status: 500,
        data: "Internal Server Error",
        time: 0,
      });
    }
  };

  const handleAddHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const handleAddParam = () => {
    setParams([...params, { key: "", value: "" }]);
  };

  return (
    <div className="space-y-4 p-4">
      {/* Method + URL + Send Button */}
      <div className="flex space-x-2">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border bg-zinc-800 text-white font-outfit p-2 rounded-md"
        >
          {methods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/users"
          className="flex-1 bg-zinc-800 text-white font-outfit"
        />
        <Button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white">
          Send
        </Button>
      </div>

      {/* Tabs for Params, Headers, Body, Auth, Tests */}
      <Tabs defaultValue="params">
        <TabsList className="bg-zinc-800 font-outfit">
          <TabsTrigger value="params">Params</TabsTrigger>
          <TabsTrigger value="headers">Headers</TabsTrigger>
          <TabsTrigger value="body">Body</TabsTrigger>
          <TabsTrigger value="auth">Auth</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
        </TabsList>

        {/* Params */}
        <TabsContent value="params" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
          {params.map((param, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input
                value={param.key}
                onChange={(e) => {
                  const newParams = [...params];
                  newParams[i].key = e.target.value;
                  setParams(newParams);
                }}
                placeholder="Key"
                className="bg-zinc-800 font-outfit text-white"
              />
              <Input
                value={param.value}
                onChange={(e) => {
                  const newParams = [...params];
                  newParams[i].value = e.target.value;
                  setParams(newParams);
                }}
                placeholder="Value"
                className="bg-zinc-800 font-outfit text-white"
              />
            </div>
          ))}
          <Button onClick={handleAddParam} className="mt-2 font-outfit text-white">
            <Plus className="mr-2 h-3 w-3" />
            Add Param
          </Button>
        </TabsContent>

        {/* Headers */}
        <TabsContent value="headers" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
          {headers.map((header, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <Input
                value={header.key}
                onChange={(e) => {
                  const newHeaders = [...headers];
                  newHeaders[i].key = e.target.value;
                  setHeaders(newHeaders);
                }}
                placeholder="Key"
                className="bg-zinc-800 font-outfit text-white"
              />
              <Input
                value={header.value}
                onChange={(e) => {
                  const newHeaders = [...headers];
                  newHeaders[i].value = e.target.value;
                  setHeaders(newHeaders);
                }}
                placeholder="Value"
                className="bg-zinc-800 font-outfit text-white"
              />
            </div>
          ))}
          <Button onClick={handleAddHeader} className="mt-2 font-outfit text-white">
            <Plus className="mr-2 h-3 w-3" />
            Add Header
          </Button>
        </TabsContent>

        {/* Body */}
        <TabsContent value="body">
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter JSON body"
            className="bg-zinc-800 font-outfit text-white min-h-[150px]"
          />
        </TabsContent>

        {/* Auth */}
        <TabsContent value="auth">
          <Select value={authType} onValueChange={setAuthType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Auth Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Auth</SelectItem>
              <SelectItem value="bearer">Bearer Token</SelectItem>
            </SelectContent>
          </Select>
          {authType !== "none" && (
            <Input
              value={authToken}
              onChange={(e) => setAuthToken(e.target.value)}
              placeholder="Token"
              className="bg-zinc-800 font-outfit text-white mt-2"
            />
          )}
        </TabsContent>
      </Tabs>

      {/* ✅ Response Section */}
      {response && (
        <Response
          data={response.response?.data || response.data}
          status={response.response?.status || response.status}
          time={response.response?.time || response.time}
        />
      )}
    </div>
  );
}
