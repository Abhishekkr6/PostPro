"use client";

import { useState } from "react";
import { Code, FileJson, Play, Plus, Save, Send } from "lucide-react";
import { Button } from "../components/ui/dashButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/dashCard";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/dashTabs";
import { Textarea } from "../components/ui/textarea";
import TotalRequestsCard from "../components/TotalRequestsCard";
import SuccessRateCard from "../components/SuccessRate";
import AvgResponseTimeCard from "../components/AvgResponseTimeCard";
import ActiveCollectionsCard from "../components/ActiveCollectionsCard";
import RequestBuilder from "../components/RequestBuilder";
import Response from "../components/Response";
import ActivityList from "../components/ActivityList";

export default function Dashboard() {
  const [url, setUrl] = useState("https://api.example.com/users");
  const [responseData, setResponseData] = useState(`{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com"
      }
    ]
  }
}`);

  const handleSendRequest = () => {
    console.log("Sending request to:", url);
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden backdrop-blur-sm shadow-sm border-b mt-24 mb-10 w-full border-white/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <TotalRequestsCard />
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <SuccessRateCard />
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <AvgResponseTimeCard />
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <ActiveCollectionsCard />
          </Card>
        </div>

        <div className="mb-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation font-outfit">
                API Request Builder
              </CardTitle>
              <CardDescription className="text-zinc-400 font-outfit">
                Create and test your API requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <RequestBuilder />
              </div>
            </CardContent>
          </Card>
        </div>

        <Response />

        <div>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="font-outfit text-white">
                Recent Activity
              </CardTitle>
              <CardDescription className="text-zinc-400 font-outfit">
                Your latest API requests and actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
