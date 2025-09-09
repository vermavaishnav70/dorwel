"use client";
import { useEffect } from "react";

// Loads third-party scripts only in production and with error handling so they don't break dev HMR.
export default function SafeThirdPartyScripts() {
  useEffect(() => {
    // Only load in production and if an env var is set
    if (process.env.NODE_ENV !== "production") return;
    const fsId = process.env.NEXT_PUBLIC_FULLSTORY_ID;
    if (!fsId) return;

    // Prevent third-party scripts from monkey-patching fetch during development by ensuring
    // we load them after the app has mounted and with error handlers.
    const script = document.createElement("script");
    script.src = `https://edge.fullstory.com/s/fs.js`;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";

    script.onerror = () => {
      // Don't throw — just log. This prevents the whole app HMR from failing when the script can't load.
      // eslint-disable-next-line no-console
      console.warn("FullStory script failed to load or was blocked in this environment.");
    };

    script.onload = () => {
      try {
        // Initialize FullStory safely if available
        // @ts-ignore
        if (window.FS && typeof window.FS === "function") {
          // @ts-ignore
          window.FS("init", { orgId: fsId });
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("FullStory init failed:", err);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
