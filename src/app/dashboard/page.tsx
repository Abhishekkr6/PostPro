"use client"

import { useState } from "react"
import { Code, FileJson, Play, Plus, Save, Send } from "lucide-react"
import { Button } from "../components/ui/dashButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/dashCard"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/dashTabs"
import { Textarea } from "../components/ui/textarea"

export default function Dashboard() {
  const [selectedMethod, setSelectedMethod] = useState("GET")
  const [url, setUrl] = useState("https://api.example.com/users")
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
}`)

  const handleSendRequest = () => {
    console.log("Sending request to:", url)
  }

  return (
    <div className="backdrop-blur-sm shadow-sm border-b mt-24 mb-10 w-full border-white/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white font-outfit">Total Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-outfit text-white">1,248</div>
              <p className="text-xs text-zinc-400 font-outfit">+12% from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium font-outfit text-white">Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-outfit text-white">98.5%</div>
              <p className="text-xs text-zinc-400 font-outfit">+0.5% from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium font-outfit text-white">Avg. Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-outfit text-white">124ms</div>
              <p className="text-xs text-zinc-400 font-outfit">-18ms from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium font-outfit text-white">Active Collections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-outfit text-white">12</div>
              <p className="text-xs text-zinc-400 font-outfit">+2 new collections</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation font-outfit">API Request Builder</CardTitle>
              <CardDescription className="text-zinc-400 font-outfit">Create and test your API requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <Select value={selectedMethod} onValueChange={setSelectedMethod}>
                    <SelectTrigger className="w-full sm:w-[100px] bg-zinc-800 font-outfit text-white">
                      <SelectValue placeholder="Method" />
                    </SelectTrigger>
                    <SelectContent className="font-outfit">
                      <SelectItem value="GET">GET</SelectItem>
                      <SelectItem value="POST">POST</SelectItem>
                      <SelectItem value="PUT">PUT</SelectItem>
                      <SelectItem value="DELETE">DELETE</SelectItem>
                      <SelectItem value="PATCH">PATCH</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex-1 font-outfit text-white">
                    <Input
                      placeholder="Enter request URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="bg-zinc-800 font-outfit text-white"
                    />
                  </div>
                  <Button onClick={handleSendRequest} className="font-outfit">
                    <Send className="mr-2 h-4 w-4 font-outfit" />
                    Send
                  </Button>
                </div>

                <Tabs defaultValue="params">
                  <TabsList className="bg-zinc-800 font-outfit">
                    <TabsTrigger value="params">Params</TabsTrigger>
                    <TabsTrigger value="headers">Headers</TabsTrigger>
                    <TabsTrigger value="body">Body</TabsTrigger>
                    <TabsTrigger value="auth">Auth</TabsTrigger>
                    <TabsTrigger value="tests">Tests</TabsTrigger>
                  </TabsList>
                  <TabsContent value="params" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
                    <div className="grid grid-cols-3 gap-2">
                      <Input placeholder="Key" className="bg-zinc-800 font-outfit text-white" />
                      <Input placeholder="Value" className="bg-zinc-800 font-outfit text-white" />
                      <Input placeholder="Description" className="bg-zinc-800 font-outfit text-white" />
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2 font-outfit text-white">
                      <Plus className="mr-2 h-3 w-3 font-outfit text-white hover:text-black" />
                      Add Parameter
                    </Button>
                  </TabsContent>
                  <TabsContent value="headers" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
                    <div className="grid grid-cols-3 gap-2">
                      <Input placeholder="Key" className="bg-zinc-800 font-outfit text-white" />
                      <Input placeholder="Value" className="bg-zinc-800 font-outfit text-white" />
                      <Input placeholder="Description" className="bg-zinc-800 font-outfit text-white" />
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2 font-outfit text-white hover:text-black">
                      <Plus className="mr-2 h-3 w-3 font-outfit text-white hover:text-black" />
                      Add Header
                    </Button>
                  </TabsContent>
                  <TabsContent value="body" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
                    <Select defaultValue="json">
                      <SelectTrigger className="w-[180px] mb-2 bg-zinc-800 font-outfit text-white">
                        <SelectValue placeholder="Content Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem className="font-outfit" value="json">application/json</SelectItem>
                        <SelectItem className="font-outfit" value="form">multipart/form-data</SelectItem>
                        <SelectItem className="font-outfit" value="text">text/plain</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Request body"
                      className="min-h-[150px] text-sm bg-zinc-800 font-outfit text-white"
                      defaultValue={`{\n  "name": "John Doe",\n  "email": "john@example.com"\n}`}
                    />
                  </TabsContent>
                  <TabsContent value="auth" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
                    <Select defaultValue="bearer">
                      <SelectTrigger className="w-full mb-2 bg-zinc-800 font-outfit text-white">
                        <SelectValue placeholder="Auth Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem className="font-outfit" value="none">No Auth</SelectItem>
                        <SelectItem className="font-outfit" value="basic">Basic Auth</SelectItem>
                        <SelectItem className="font-outfit" value="bearer">Bearer Token</SelectItem>
                        <SelectItem className="font-outfit" value="oauth2">OAuth 2.0</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Token" className="bg-zinc-800 font-outfit text-white" />
                  </TabsContent>
                  <TabsContent value="tests" className="border rounded-md p-4 border-zinc-800 bg-zinc-800/50 mt-2">
                    <Textarea
                      placeholder="Write test scripts"
                      className="min-h-[150px] text-sm bg-zinc-800 font-outfit text-white"
                      defaultValue={`// Example test script\npm.test("Status code is 200", function() {\n  pm.response.to.have.status(200);\n});\n\npm.test("Response has users", function() {\n  var jsonData = pm.response.json();\n  pm.expect(jsonData.data.users).to.be.an('array');\n});`}
                    />
                    <div className="flex justify-end mt-2 space-x-2">
                      <Button className="font-outfit" variant="outline" size="sm">
                        <Save className="mr-2 h-3 w-3" />
                        Save
                      </Button>
                      <Button className="font-outfit" size="sm">
                        <Play className="mr-2 h-3 w-3" />
                        Run Tests
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        
        <div className="mb-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-outfit bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation">Response</CardTitle>
                <CardDescription className="text-zinc-400 font-outfit">
                  <span className="inline-flex items-center rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                    200 OK
                  </span>
                  <span className="ml-2">124ms</span>
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button className="font-outfit" variant="outline" size="sm">
                  <FileJson className="mr-2 h-4 w-4" />
                  Pretty
                </Button>
                <Button className="font-outfit" variant="outline" size="sm">
                  <Code className="mr-2 h-4 w-4" />
                  Raw
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-zinc-800 bg-zinc-800 p-4 font-outfit text-white">
                <pre className="font-mono text-sm overflow-auto max-h-[300px]">{responseData}</pre>
              </div>
            </CardContent>
          </Card>
        </div>

  
        <div>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="font-outfit text-white">Recent Activity</CardTitle>
              <CardDescription className="text-zinc-400 font-outfit">Your latest API requests and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start space-x-4 border-b border-zinc-800 pb-4 last:border-0 font-outfit text-white">
                    <div
                      className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full ${
                        i % 3 === 0
                          ? "bg-red-500/20 text-red-400"
                          : i % 2 === 0
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {i % 3 === 0 ? (
                        <span className="text-xs font-bold font-outfit">DEL</span>
                      ) : i % 2 === 0 ? (
                        <span className="text-xs font-outfit font-bold">PUT</span>
                      ) : (
                        <span className="text-xs font-outfit font-bold">GET</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium font-outfit">
                          {i % 3 === 0 ? "DELETE" : i % 2 === 0 ? "PUT" : "GET"} /api/users
                          {i % 3 === 0 ? `/${i}` : i % 2 === 0 ? `/${i}` : ""}
                        </h4>
                        <span className="text-xs text-zinc-400 font-outfit">
                          {i === 1
                            ? "Just now"
                            : i === 2
                              ? "5 min ago"
                              : i === 3
                                ? "15 min ago"
                                : i === 4
                                  ? "1 hour ago"
                                  : "3 hours ago"}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 font-outfit">
                        {i % 3 === 0
                          ? "Deleted user record"
                          : i % 2 === 0
                            ? "Updated user information"
                            : "Retrieved user list"}
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            i % 3 === 0 && i !== 3
                              ? "bg-green-500/20 text-green-400"
                              : i === 3
                                ? "bg-red-500/20 text-red-400"
                                : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {i % 3 === 0 && i !== 3 ? "204 No Content" : i === 3 ? "404 Not Found" : "200 OK"}
                        </span>
                        <span className="text-xs text-zinc-400 font-outfit">{i * 30 + 50}ms</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

