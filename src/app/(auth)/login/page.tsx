"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast({
          message: "Logged in successfully",
          mode: "success",
        });
        router.push("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const apiError = error.response.data as ApiError;
        toast({
          message: getErrorMessage(apiError.code),
          mode: "error",
        });
      } else {
        toast({
          message: getErrorMessage("internal_server_error"),
          mode: "error",
        });
      }
    }

    setIsLoading(false);
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Logging in with Google...");
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Main container */}
      <div className="w-full max-w-md text-center mb-2">
        <h1 className="text-3xl font-bold text-gray-500 mb-3">Welcome Back</h1>
        <p className="text-lg text-gray-400">
          Sign in to your Interior Business Suite
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-6">
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
        <div className="space-y-3 mb-2">
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

        {/* Remember me and forgot password */}
        <div className="flex mb-3 items-center justify-end-safe">
          <button
            onClick={() => router.push("/forgot-password")}
            type="button"
            className="text-sm font-semibold text-gray-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In button */}
        <button
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
          onClick={handleGoogleLogin}
          type="button"
          className="w-full h-16 bg-white/60 border-2 border-gray-200 rounded-[30px] flex items-center justify-center gap-3 text-lg font-semibold text-gray-500 hover:bg-white/80 transition-colors cursor-pointer"
        >
          <Image src="/googleIcon.svg" alt="Google" width={20} height={20} />
          Continue with Google
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400 mt-2">
        Don&apos;t have an account?{" "}
        <button
          onClick={() => router.push("/signup")}
          className="font-semibold text-gray-500 hover:underline cursor-pointer"
        >
          Sign up here
        </button>
      </p>
    </div>
  );
}
