import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent py-16 border-t border-gray-100/20 mx-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 via-cyan-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent rainbow-animation font-outfit">
                PostPro
              </span>
            </div>
            <p className="text-white text-sm leading-relaxed font-outfit">
              Simplifying API Testing. Built for developers, by developers.
            </p>
            <p className="text-lg font-medium text-gray-200 font-outfit mt-4 flex items-center">
              <span>Test APIs Smarter, Ship Faster.</span>
              <span className="ml-2 transform hover:scale-110 transition-transform duration-300 inline-block">🚀</span>
            </p>

            <div className="flex space-x-5 mt-6">
              <Link
                href="https://github.com/Abhishekkr6/PostPro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/company/postpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/postpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 font-outfit mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Features", "Documentation", "Blog", "Support"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-200 font-outfit hover:text-gray-100 text-sm transition-all duration-200 hover:translate-x-1 inline-flex"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 font-outfit mb-5">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/legal/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-200 hover:text-gray-100 text-sm transition-all duration-200 hover:translate-x-1 inline-flex font-outfit"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 font-outfit mb-5">Stay Updated</h3>
            <p className="text-gray-300 text-sm font-outfit mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-sm bg-gray-900 border border-gray-200 rounded-l-md font-outfit focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
              />
              <button className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded-r-md font-outfit hover:bg-gray-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 font-outfit text-sm">© {currentYear} PostPro. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/contact" className="font-outfit text-gray-200 hover:text-gray-100 text-sm transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/careers" className="text-gray-200 font-outfit hover:text-gray-100 text-sm transition-colors duration-200">
              Careers
            </Link>
            <Link href="/faq" className="text-gray-200 hover:text-gray-100 font-outfit text-sm transition-colors duration-200">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

