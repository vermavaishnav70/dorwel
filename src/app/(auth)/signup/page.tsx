"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useRouter();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || password !== confirmPassword) return;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-500 mb-3">
          Create Account
        </h1>
        <p className="text-lg text-gray-400">
          Start your Interior Business Suite
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-500">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full h-[58px] px-5 bg-white/80 border border-gray-200 rounded-[30px] text-base placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full h-[58px] px-5 bg-white/80 border border-gray-200 rounded-[30px] text-base placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-500">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="w-full h-[58px] px-5 pr-12 bg-white/80 border border-gray-200 rounded-[30px] text-base placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all"
              />
              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1"
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-gray-500" />
                  ) : (
                    <Eye className="size-5 text-gray-500" />
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-500">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                required
                className="w-full h-[58px] px-5 pr-12 bg-white/80 border border-gray-200 rounded-[30px] text-base placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all"
              />
              {confirmPassword && (
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1"
                >
                  {showConfirm ? (
                    <EyeOff className="size-5 text-gray-500" />
                  ) : (
                    <Eye className="size-5 text-gray-500" />
                  )}
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={!agree || password !== confirmPassword}
            className="w-full h-[60px] bg-indigo-500 disabled:bg-indigo-300 text-white text-lg font-semibold rounded-[60px] hover:bg-purple/90 transition-colors"
          >
            Create account
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full h-16 bg-white/60 border-2 border-gray-200 rounded-[30px] flex items-center justify-center gap-3 text-lg font-semibold text-gray-500 hover:bg-white/80 transition-colors"
          >
            <Image src="/googleIcon.svg" alt="Google" width={20} height={20} />
            Continue with Google
          </button>
        </form>
      ) : (
        <div className="space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L9 18L4 13"
                stroke="#16A34A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Account created
          </h2>
          <p className="text-gray-500">You can now sign in to your account.</p>
          <Link href="login" className="block w-full">
            <span className="inline-flex w-full h-[60px] items-center justify-center bg-indigo-500 text-white text-lg font-semibold rounded-[60px] hover:bg-purple/90 transition-colors">
              Go to login
            </span>
          </Link>
        </div>
      )}

      <p className="text-center text-sm text-gray-400 mt-8">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-gray-500 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
