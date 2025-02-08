"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agree) {
      setError("You must agree to the terms and conditions");
      return;
    }

    console.log("Registration data:", { name, email, password });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-900 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-gray-700">
          <div className="space-y-3">
            <button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center py-2 px-4 rounded-md bg-white text-black hover:bg-gray-300"
            >
              <FcGoogle className="mr-2 text-xl" /> Continue with Google
            </button>
            <button
              onClick={() => signIn("github")}
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

          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 border-gray-600 rounded"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label className="ml-2 block text-sm text-gray-300">
                I agree with the <a href="/terms" className="text-white hover:underline">terms and conditions</a>
              </label>
            </div>

            {error && <div className="text-red-400 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md bg-white text-black hover:bg-gray-300"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm text-gray-300">
            Already have an account? <a href="/login" className="text-white hover:underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
