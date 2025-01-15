"use client"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === "joseph@joseph.com" && password === "123456") {
      router.push("/dashboard")
    } else {
      setError("Invalid email or password. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <div className="flex justify-center">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={150}
            height={50}
            priority
            className="dark:invert"
          />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Login to Your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:border-transparent focus:outline-none focus:ring-2
                         focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:border-transparent focus:outline-none focus:ring-2
                         focus:ring-blue-500"
            />
          </div>
          {error && <div className="mt-2 text-center text-sm text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 px-4 text-white
                       hover:bg-blue-700 focus:outline-none focus:ring-2
                       focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
