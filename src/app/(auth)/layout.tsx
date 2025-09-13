import { Suspense } from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex h-full flex-grow flex-col items-center justify-center gap-8 py-8">
        <div className="w-full max-w-md bg-white/80 shadow-md border border-white/30 rounded-[30px] p-10 md:p-8 flex flex-col gap-4  ">
          <Logo />
          {children}
          <div>
            <p className="text-xs text-gray-400 text-center">
              By proceeding you acknowledge that you have read, understood and
              agree to our <Link className="hover:underline font-bold" href="/legal/terms">Terms of Service</Link> and{" "}
              <Link className="hover:underline font-bold" href="/legal/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
