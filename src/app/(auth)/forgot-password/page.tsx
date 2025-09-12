"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (emailSent) {
    return (
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
          Check your email
        </h2>
        <p className="text-gray-500">
          If an account exists for{" "}
          <span className="font-medium text-gray-600">{email}</span>, you will
          receive a password reset link.
        </p>
        <Link href="/login" className="block w-full">
          <span className="inline-flex w-full h-[60px] items-center justify-center bg-indigo-500 text-white text-lg font-semibold rounded-[60px] hover:bg-purple/90 transition-colors">
            Return to login
          </span>
        </Link>
      </div>
    );
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/forgot-password`,
        { email },
        { withCredentials: true }
      );
      setEmailSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
              Forgot Password
            </h1>
            <p className="text-lg text-gray-400">
              Enter your email to receive a password reset link
            </p>
          </div>

          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
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
              <button
                type="submit"
                disabled={!email || loading}
                className="w-full h-[60px] bg-indigo-500 text-white text-lg font-semibold rounded-[60px] hover:bg-purple/90 transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send reset link"}
              </button>
              <Link href="/login" className="block w-full">
                <span className="inline-flex w-full h-[58px] items-center justify-center bg-white/60 border-2 border-gray-200 rounded-[30px] text-lg font-semibold text-gray-500 hover:bg-white/80 transition-colors">
                  Back to login
                </span>
              </Link>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
}
