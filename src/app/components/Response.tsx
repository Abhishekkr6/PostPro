"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "@/components/ui/button";
import { FileJson, Code } from "lucide-react";

interface ResponseProps {
  data: any;
  status: number;
  time: number;
}

export default function Response({ data, status, time }: ResponseProps) {
  const [isPretty, setIsPretty] = useState(true);

  return (
    <div className="mb-6">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="font-outfit mb-3 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation">
              Response
            </CardTitle>
            <CardDescription className="text-zinc-400 font-outfit">
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  status === 200
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {status === 200 ? `${status} OK` : `${status} Error`}
              </span>
              <span className="ml-2">{time}ms</span>
            </CardDescription>
          </div>

          <div className="flex space-x-2">
            <Button
              onClick={() => setIsPretty(true)}
              className={`font-outfit ${
                isPretty
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-black"
              }`}
              variant="outline"
              size="sm"
            >
              <FileJson className="mr-2 h-4 w-4" />
              Pretty
            </Button>
            <Button
              onClick={() => setIsPretty(false)}
              className={`font-outfit ${
                !isPretty
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-black"
              }`}
              variant="outline"
              size="sm"
            >
              <Code className="mr-2 h-4 w-4" />
              Raw
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border border-zinc-800 bg-zinc-800 p-4 font-outfit text-white">
            <pre className="font-mono text-sm overflow-auto max-h-[300px]">
              {isPretty
                ? JSON.stringify(data, null, 2) 
                : JSON.stringify(data)} 
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
