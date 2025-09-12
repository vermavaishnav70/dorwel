"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();

  const hanlelogin = (e: any) => {
    e.preventDefault();
    // Handle login logic here
    navigate.push("/dashboard");
  };
  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Logging in with Google...");
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Main container */}
      <div className="w-full max-w-md">
        {/* Glass morphism card */}
        <div className="bg-white/80 shadow-md border border-white/30 rounded-[30px] p-10 md:p-8">
          {/* Header section */}
          <div className="text-center mb-8">
            {/* Logo icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-icon">
              <img src="/logo.svg" />
            </div>

            {/* Title and subtitle */}
            <h1 className="text-3xl font-bold text-gray-500 mb-3">
              Welcome Back
            </h1>
            <p className="text-lg text-gray-400">
              Sign in to your Interior Business Suite
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email field */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-[58px] px-5 bg-white/80 border border-gray-200 rounded-[30px] text-base placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all"
              />
            </div>

            {/* Password field */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-500">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-[58px] px-5 pr-12 bg-white/80 border border-gray-200 rounded-[30px] text-base placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple/20 focus:border-purple transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 "
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_32_1261)">
                      <path
                        d="M10.875 3.0625C8.58279 3.0625 6.69841 4.10312 5.25349 5.44258C3.89998 6.70117 2.96482 8.19531 2.48669 9.25C2.96482 10.3047 3.89998 11.7988 5.24998 13.0574C6.69841 14.3969 8.58279 15.4375 10.875 15.4375C13.1672 15.4375 15.0515 14.3969 16.4965 13.0574C17.85 11.7988 18.7851 10.3047 19.2633 9.25C18.7851 8.19531 17.85 6.70117 16.5 5.44258C15.0515 4.10312 13.1672 3.0625 10.875 3.0625ZM4.10388 4.20859C5.75974 2.66875 8.03435 1.375 10.875 1.375C13.7156 1.375 15.9902 2.66875 17.6461 4.20859C19.2914 5.73789 20.3918 7.5625 20.9156 8.81758C21.0316 9.09531 21.0316 9.40469 20.9156 9.68242C20.3918 10.9375 19.2914 12.7656 17.6461 14.2914C15.9902 15.8313 13.7156 17.125 10.875 17.125C8.03435 17.125 5.75974 15.8313 4.10388 14.2914C2.45857 12.7656 1.35818 10.9375 0.837866 9.68242C0.721851 9.40469 0.721851 9.09531 0.837866 8.81758C1.35818 7.5625 2.45857 5.73438 4.10388 4.20859ZM10.875 12.0625C12.4289 12.0625 13.6875 10.8039 13.6875 9.25C13.6875 7.69609 12.4289 6.4375 10.875 6.4375C10.8504 6.4375 10.8293 6.4375 10.8047 6.4375C10.8504 6.6168 10.875 6.80664 10.875 7C10.875 8.24102 9.86599 9.25 8.62498 9.25C8.43162 9.25 8.24177 9.22539 8.06248 9.17969C8.06248 9.2043 8.06248 9.22539 8.06248 9.25C8.06248 10.8039 9.32107 12.0625 10.875 12.0625ZM10.875 4.75C12.0684 4.75 13.213 5.22411 14.057 6.06802C14.9009 6.91193 15.375 8.05653 15.375 9.25C15.375 10.4435 14.9009 11.5881 14.057 12.432C13.213 13.2759 12.0684 13.75 10.875 13.75C9.6815 13.75 8.53691 13.2759 7.693 12.432C6.84908 11.5881 6.37498 10.4435 6.37498 9.25C6.37498 8.05653 6.84908 6.91193 7.693 6.06802C8.53691 5.22411 9.6815 4.75 10.875 4.75Z"
                        fill="#6B7280"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_32_1261">
                        <path d="M0.75 0.25H21V18.25H0.75V0.25Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 border border-black rounded-sm checked:bg-purple checked:border-purple"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <button
                onClick={() => navigate.push("/forgot-password")}
                type="button"
                className="text-sm font-semibold text-gray-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In button */}
            <button
              onClick={hanlelogin}
              type="submit"
              className="w-full h-[60px] bg-indigo-500 text-white text-lg font-semibold rounded-[60px] hover:bg-purple/90 transition-colors cursor-pointer"
            >
              Sign In
            </button>

            {/* Divider */}
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

            {/* Google button */}
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
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => navigate.push("/signup")}
              className="font-semibold text-gray-500 hover:underline"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
