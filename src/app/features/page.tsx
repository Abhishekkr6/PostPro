"use client"

import { FeatureCard } from "../components/feature-card"
import { Code, Layers, Zap, Eye, FolderKanban, GitBranch, Users, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Intuitive API Request Builder",
      description:
        "Effortlessly craft API requests with a user-friendly interface that lets you choose HTTP methods, configure headers, manage query parameters, and define request bodies—all with minimal clicks.",
    },
    {
      icon: <FolderKanban className="h-10 w-10" />,
      title: "Organized Collections",
      description:
        "Save and organize your API requests into customizable collections. Easily rename, rearrange, and share these collections, making it simple to manage projects and collaborate with your team.",
    },
    {
      icon: <GitBranch className="h-10 w-10" />,
      title: "Dynamic Environment Management",
      description:
        "Seamlessly switch between different environments—such as development, testing, and production—by managing environment-specific variables. This ensures your API endpoints and credentials stay secure and easily accessible.",
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Real-Time Response Viewer",
      description:
        "Experience immediate feedback with a real-time response viewer. With syntax highlighting and clear formatting, debugging and monitoring API performance become more efficient and hassle-free.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Test Scripting & Automation",
      description:
        "Automate your API testing by integrating pre-request and test scripts. This feature allows you to validate responses and streamline your testing workflows, reducing manual effort and enhancing reliability.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Code Generation",
      description:
        "Generate ready-to-use code snippets in multiple programming languages (e.g., JavaScript, Python) automatically. This accelerates your development process by simplifying the integration of APIs into your projects.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Collaboration Tools",
      description:
        "Enhance team collaboration with shared collections, inline commenting, and version control. Whether you're working solo or with a team, these tools ensure everyone stays in sync.",
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "AI-Powered Enhancements",
      description:
        "Leverage AI-driven suggestions to optimize your API endpoints and generate test cases. This cutting-edge feature boosts productivity by intelligently assisting in your API testing process.",
    },
  ]

  return (
    <section className="relative z-10 mt-10 mx-auto max-w-6xl flex flex-col items-center justify-center gap-6 min-h-screen bg-transparent text-center px-4 py-16">
      <div className="text-center mb-5">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-abel bg-gradient-to-r from-cyan-500 via-cyan-500 via-blue-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation">
          __Key Features__
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl font-delius mx-auto">
          Everything you need to build, test, and manage your APIs with ease and efficiency.
        </p>
      </div>

      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-outfit">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  )
}

