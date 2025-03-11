"use client";

import React, { useState } from "react";

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

export default function RequestBuilder() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState({});
  const [params, setParams] = useState({});
  const [body, setBody] = useState({});
  const [response, setResponse] = useState(null);

  const handleSend = async () => {
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ method, url, headers, params, body }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="space-y-4 cursor-pointer">
      {/* Method + URL + Send Button */}
      <div className="flex flex-col space-y-2 cursor-pointer sm:flex-row font-outfit sm:space-y-0 sm:space-x-2">
        {/* Method Select */}
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full sm:w-[100px] bg-zinc-800 text-white font-outfit p-2 rounded-md border border-zinc-700 cursor-pointer"
        >
          {methods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>

        {/* URL Input */}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter request URL"
          className="flex-1 bg-zinc-800 font-outfit text-white p-2 rounded-md border border-zinc-700"
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="bg-blue-500 font-outfit hover:bg-blue-600 text-white p-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
