"use client"

import { useState } from "react"
import { ArrowRight, Code, GitBranch, Heart, Lightbulb, MessageSquare, Shield, Users, Zap } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"


export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("journey")

  const sections = [
    { id: "journey", title: "Our Journey", icon: <GitBranch className="h-5 w-5" /> },
    { id: "mission", title: "Mission & Vision", icon: <Lightbulb className="h-5 w-5" /> },
    { id: "technology", title: "Technology", icon: <Code className="h-5 w-5" /> },
    { id: "approach", title: "User-Centric", icon: <Heart className="h-5 w-5" /> },
    { id: "security", title: "Security", icon: <Shield className="h-5 w-5" /> },
    { id: "team", title: "Our Team", icon: <Users className="h-5 w-5" /> },
    { id: "roadmap", title: "Roadmap", icon: <Zap className="h-5 w-5" /> },
    { id: "community", title: "Community", icon: <MessageSquare className="h-5 w-5" /> },
  ]

  return (
    <div className="bg-black text-white relative z-10 mt-10 mx-auto max-w-6xl flex flex-col items-center justify-center gap-6 min-h-screen bg-transparent text-center px-4 py-16">
      <section className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
  
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-abel font-bold tracking-tighter mb-4 animate-fade-in">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">PostPro</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 animate-fade-in-delay font-outfit">
            More than just an API testing platform—its the culmination of a journey driven by innovation, passion, and
            a commitment to simplifying the complex world of API development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-12 mx-auto">
        <Tabs defaultValue="journey" value={activeSection} onValueChange={setActiveSection} className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4">
              <h2 className="text-xl font-semibold font-outfit mb-4 text-zinc-100">Explore Our Story</h2>
              <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
                {sections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className={`flex items-center justify-start gap-2 px-4 py-3 font-outfit w-full text-left rounded-lg transition-all ${
                      activeSection === section.id
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    {section.icon}
                    <span>{section.title}</span>
                    {activeSection === section.id && <ArrowRight className="ml-auto w-4 h-4" />}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="md:w-3/4">
              <div className="bg-zinc-900/50 rounded-xl p-6 md:p-8 border border-zinc-800">
                <TabsContent value="journey" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Our Journey</h3>
                  <p className="text-zinc-300 font-outfit">
                    Our story began with a simple idea: to empower developers by transforming the intricate process of
                    API testing into an intuitive, efficient, and enjoyable experience. Through overcoming challenges
                    and continuous iteration, we have evolved PostPro into a robust solution that meets the modern
                    developers needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 font-outfit">
                    {[
                      {
                        title: "Inception",
                        desc: "The idea that sparked PostPro",
                        icon: <Lightbulb className="h-8 w-8 text-purple-400" />,
                      },
                      {
                        title: "Evolution",
                        desc: "Continuous improvement through feedback",
                        icon: <GitBranch className="h-8 w-8 text-blue-400" />,
                      },
                      {
                        title: "Today",
                        desc: "A comprehensive API testing solution",
                        icon: <Zap className="h-8 w-8 text-green-400" />,
                      },
                    ].map((item, i) => (
                      <Card key={i} className="bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 transition-colors">
                        <CardContent className="p-6 flex flex-col items-center text-center text-white">
                          <div className="mb-4">{item.icon}</div>
                          <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="mission" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Mission & Vision</h3>
                  <p className="text-zinc-300 font-outfit">
                    Our mission is to streamline API testing and management, enabling faster development cycles and
                    higher-quality software. We envision a future where every developer can seamlessly build, test, and
                    manage APIs without being hindered by cumbersome processes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
                      <h4 className="text-xl font-semibold mb-3 flex items-center font-outfit">
                        <Zap className="w-6 h-6 mr-2 text-purple-400" />
                        Our Mission
                      </h4>
                      <p className="text-zinc-300 font-outfit">
                        To streamline API testing and management, enabling faster development cycles and higher-quality
                        software.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
                      <h4 className="text-xl font-semibold mb-3 flex items-center font-outfit">
                        <Lightbulb className="w-6 h-6 mr-2 text-blue-400" />
                        Our Vision
                      </h4>
                      <p className="text-zinc-300 font-outfit">
                        A future where every developer can seamlessly build, test, and manage APIs without being
                        hindered by cumbersome processes.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="technology" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Technology & Innovation</h3>
                  <p className="text-zinc-300 font-outfit">
                    At the heart of PostPro lies a blend of cutting-edge technology and innovative design. We harness
                    the latest advancements to create a scalable, high-performance platform that not only simplifies API
                    testing but also integrates effortlessly with your existing workflows.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {[
                      {
                        icon: <Zap className="w-10 h-10 text-blue-400" />,
                        title: "High Performance",
                        desc: "Optimized for speed and efficiency",
                      },
                      {
                        icon: <Code className="w-10 h-10 text-purple-400" />,
                        title: "Modern Architecture",
                        desc: "Built with the latest technologies",
                      },
                      {
                        icon: <GitBranch className="w-10 h-10 text-green-400" />,
                        title: "Seamless Integration",
                        desc: "Works with your existing tools",
                      },
                    ].map((item, i) => (
                      <Card key={i} className="bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 transition-colors">
                        <CardContent className="p-6 flex flex-col items-center text-center text-white">
                          <div className="mb-4">{item.icon}</div>
                          <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="approach" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">User-Centric Approach</h3>
                  <p className="text-zinc-300 font-outfit">
                    Every aspect of PostPro is designed with the user in mind. From a clean, modern UI to intuitive
                    features, our platform is built to address real-world challenges faced by developers. We ensure that
                    every interaction is smooth, empowering you to focus on what truly matters—building great
                    applications.
                  </p>

                  <div className="relative mt-6 p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 font-outfit">Design Philosophy</h4>
                        <ul className="space-y-2 text-zinc-300 font-outfit">
                          <li className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                            <span>Intuitive interfaces that reduce learning curve</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                            <span>Workflows designed for developer efficiency</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-purple-400 shrink-0 mt-0.5" />
                            <span>Consistent experience across all features</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-outfit font-semibold mb-3">User Benefits</h4>
                        <ul className="space-y-2 text-zinc-300 font-outfit">
                          <li className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" />
                            <span>Reduced time spent on API testing</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" />
                            <span>Faster onboarding for new team members</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-blue-400 shrink-0 mt-0.5" />
                            <span>Focus on building, not debugging</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Security & Reliability</h3>
                  <p className="text-zinc-300 font-outfit">
                    Security is paramount at PostPro. Our platform is engineered with robust security measures and
                    rigorous data protection protocols, ensuring that your API testing environment is as secure as it is
                    efficient. Reliability is a cornerstone of our service, providing you with consistent performance
                    you can trust.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 transition-colors">
                      <CardContent className="p-6">
                        <Shield className="w-10 h-10 text-green-400 mb-4" />
                        <h4 className="text-xl font-semibold mb-3 font-outfit text-white">Security Measures</h4>
                        <ul className="space-y-2 text-zinc-300 font-outfit">
                          <li className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" />
                            <span>End-to-end encryption for all data</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" />
                            <span>Regular security audits and penetration testing</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 text-green-400 shrink-0 mt-1" />
                            <span>Compliance with industry standards</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 transition-colors">
                      <CardContent className="p-6">
                        <Zap className="w-10 h-10 text-blue-400 mb-4" />
                        <h4 className="text-xl font-semibold mb-3 font-outfit text-white">Reliability Promise</h4>
                        <ul className="space-y-2 font-outfit text-zinc-300">
                          <li className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 text-blue-400 shrink-0 mt-1" />
                            <span>99.9% uptime guarantee</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 text-blue-400 shrink-0 mt-1" />
                            <span>Distributed infrastructure for resilience</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 text-blue-400 shrink-0 mt-1" />
                            <span>Continuous monitoring and quick response</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="team" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Our Team</h3>
                  <p className="text-zinc-300 font-outfit">
                    PostPro is powered by a dedicated team of industry experts and technology enthusiasts. Our
                    collective expertise and shared passion drive us to continually push boundaries and refine our
                    platform, ensuring that we deliver the best possible experience for our users.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 mb-3 overflow-hidden group-hover:ring-2 group-hover:ring-purple-500 transition-all">
                          <img
                            src={`/placeholder.svg?height=80&width=80`}
                            alt="Team member"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold font-outfit">Team Member {i}</h4>
                        <p className="text-zinc-400 text-sm font-outfit">Role / Position</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="roadmap" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Future Roadmap</h3>
                  <p className="text-zinc-300 font-outfit">
                    We are committed to continuous innovation. With plans to introduce advanced automation features,
                    enhanced collaboration tools, and deeper integrations, PostPro is constantly evolving to meet the
                    emerging needs of the developer community.
                  </p>

                  <div className="relative mt-8">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-zinc-700"></div>
                    <div className="space-y-10 relative">
                      {[
                        {
                          title: "Q1 2025",
                          features: [
                            "Advanced automation features",
                            "Enhanced reporting tools",
                            "New integration options",
                          ],
                        },
                        {
                          title: "Q2 2025",
                          features: [
                            "Collaborative workspaces",
                            "Real-time testing capabilities",
                            "Expanded API support",
                          ],
                        },
                        {
                          title: "Q3 2025",
                          features: [
                            "AI-powered testing suggestions",
                            "Performance optimization tools",
                            "Enhanced security features",
                          ],
                        },
                      ].map((phase, i) => (
                        <div key={i} className="pl-10 relative">
                          <div className="absolute left-2 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <h4 className="text-xl font-semibold mb-3 font-outfit">{phase.title}</h4>
                          <ul className="space-y-2 text-zinc-300 font-outfit">
                            {phase.features.map((feature, j) => (
                              <li key={j} className="flex items-start">
                                <ArrowRight className="w-4 h-4 mr-2 text-blue-400 shrink-0 mt-1" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="community" className="mt-0 space-y-6 animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-4 font-outfit">Community & Feedback</h3>
                  <p className="text-zinc-300 font-outfit">
                    Our users are at the heart of everything we do. We actively engage with our community, valuing every
                    piece of feedback as a stepping stone toward further improvement. Your insights drive our progress,
                    making PostPro a truly collaborative and user-driven platform.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 transition-colors">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4 flex items-center font-outfit text-white">
                          <Users className="w-6 h-6 mr-2 text-purple-400" />
                          Join Our Community
                        </h4>
                        <p className="text-zinc-300 mb-4 font-outfit">
                          Connect with other developers, share your experiences, and get help from our team.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4">
                          <Button variant="outline" className="bg-white border-zinc-700 hover:bg-zinc-200">
                            Discord
                          </Button>
                          <Button variant="outline" className="bg-white border-zinc-700 hover:bg-zinc-200">
                            GitHub
                          </Button>
                          <Button variant="outline" className="bg-white border-zinc-700 hover:bg-zinc-200">
                            Twitter
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-zinc-600 transition-colors">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4 flex items-center font-outfit text-white">
                          <MessageSquare className="w-6 h-6 mr-2 text-blue-400" />
                          Share Your Feedback
                        </h4>
                        <p className="text-zinc-300 mb-4 font-outfit">
                          Your insights help us improve. Let us know what you think about PostPro.
                        </p>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Send Feedback
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-zinc-900 py-16">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-outfit">Join us on our journey</h2>
          <p className="max-w-2xl mx-auto text-zinc-300 mb-8 font-outfit">
            As we redefine API testing—making it simpler, faster, and more secure for developers everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
            <Button variant="outline" className="bg-white border-zinc-700 hover:bg-zinc-200 text-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

