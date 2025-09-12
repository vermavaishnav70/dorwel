"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || password !== confirmPassword) return;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 shadow-md border border-white/30 rounded-[30px] p-10 md:p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.1926 26.8073C32.0992 27.9007 30.3262 27.9007 29.2328 26.8073L24.4054 21.9797C23.3118 20.8863 23.3118 19.1134 24.4054 18.02L29.2328 13.1925C30.3262 12.099 32.0992 12.099 33.1926 13.1925L38.0202 18.02C39.1136 19.1134 39.1136 20.8863 38.0202 21.9797L33.1926 26.8073ZM10.7672 26.8073C9.67371 27.9007 7.90083 27.9007 6.80737 26.8073L1.97989 21.9797C0.886424 20.8863 0.886422 19.1134 1.97989 18.02L6.80737 13.1925C7.90083 12.099 9.67371 12.099 10.7672 13.1925L15.5946 18.02C16.6881 19.1134 16.6881 20.8863 15.5946 21.9797L10.7672 26.8073ZM21.98 38.0199C20.8864 39.1135 19.1136 39.1135 18.0201 38.0199L13.1926 33.1925C12.0991 32.0991 12.0991 30.3261 13.1926 29.2327L18.0201 24.4053C19.1136 23.3117 20.8864 23.3117 21.98 24.4053L26.8074 29.2327C27.9008 30.3261 27.9008 32.0991 26.8074 33.1925L21.98 38.0199ZM21.98 15.5945C20.8864 16.688 19.1136 16.688 18.0201 15.5945L13.1926 10.767C12.0991 9.67358 12.0991 7.90072 13.1926 6.80724L18.0201 1.97977C19.1136 0.886302 20.8864 0.8863 21.98 1.97977L26.8074 6.80724C27.9008 7.90072 27.9008 9.67358 26.8074 10.767L21.98 15.5945Z"
                  fill="#7774FF"
                />
              </svg>
            </div>
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

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-5 h-5 border border-black rounded-sm checked:bg-purple checked:border-purple"
                />
                <span className="text-sm text-gray-400">
                  I agree to the Terms & Privacy Policy
                </span>
              </label>

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
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_32_1254)">
                    <path
                      d="M19.875 10.7266C19.875 16.2539 16.0898 20.1875 10.5 20.1875C5.14062 20.1875 0.8125 15.8594 0.8125 10.5C0.8125 5.14062 5.14062 0.8125 10.5 0.8125C13.1094 0.8125 15.3047 1.76953 16.9961 3.34766L14.3594 5.88281C10.9102 2.55469 4.49609 5.05469 4.49609 10.5C4.49609 13.8789 7.19531 16.6172 10.5 16.6172C14.3359 16.6172 15.7734 13.8672 16 12.4414H10.5V9.10938H19.7227C19.8125 9.60547 19.875 10.082 19.875 10.7266Z"
                      fill="#EF4444"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_32_1254">
                      <path
                        d="M0.8125 0.5H19.875V20.5H0.8125V0.5Z"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                </svg>
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
              <p className="text-gray-500">
                You can now sign in to your account.
              </p>
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
              href="login"
              className="font-semibold text-gray-500 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
