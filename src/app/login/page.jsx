"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("⚠️ All fields are required.");
      return;
    }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setMessage("❌ Invalid Email or Password!");
      } else {
        setMessage("✅ Login successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (error) {
      setMessage("❌ Server error! Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-900 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-700">
          {/* Google & GitHub Login */}
          <div className="space-y-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center py-2 px-4 rounded-md bg-white text-black hover:bg-gray-300"
            >
              <FcGoogle className="mr-2 text-xl" /> Continue with Google
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center py-2 px-4 rounded-md bg-gray-800 text-white hover:bg-gray-700"
            >
              <FaGithub className="mr-2 text-xl" /> Continue with GitHub
            </button>
          </div>

          <div className="mt-6 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <div className="w-full border-t border-gray-600"></div>
          </div>

          {/* Email & Password Login */}
          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                required
                autoComplete="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-white focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-white focus:border-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {message && (
              <div
                className="mt-4 text-center text-sm px-3 py-2 rounded-md font-medium"
                style={{
                  backgroundColor: message.includes("❌") ? "#7f1d1d" : "#166534",
                  color: "white",
                }}
              >
                {message}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md bg-white text-black hover:bg-gray-300"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <a href="/register" className="text-white hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
