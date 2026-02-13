"use client";

import { useEffect, useRef, useState } from "react";

type VersionResponse = { version: string };

export default function UpdateBanner() {
  const current = process.env.NEXT_PUBLIC_APP_VERSION ?? "unknown";
  const [latest, setLatest] = useState<string>(current);
  const [show, setShow] = useState(false);
  const timer = useRef<number | null>(null);

  async function check() {
    try {
      // cache: "no-store" ensures it doesn't get cached
      const res = await fetch("/api/version", { cache: "no-store" });
      const data = (await res.json()) as VersionResponse;
      setLatest(data.version);

      if (data.version && data.version !== current) {
        setShow(true);
        // stop checking once we know there's an update
        if (timer.current) window.clearInterval(timer.current);
      }
    } catch {
      // ignore transient errors
    }
  }

  useEffect(() => {
    // check soon after load, then every 30s
    check();
    timer.current = window.setInterval(check, 30_000);

    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 14px",
        borderRadius: 12,
        border: "1px solid #ddd",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        zIndex: 9999,
        maxWidth: 520,
        width: "calc(100% - 32px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700 }}>New update available</div>
          <div style={{ fontSize: 13, opacity: 0.8 }}>
            You’re on <code>{current}</code>, latest is <code>{latest}</code>.
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid #111",
            background: "#111",
            color: "white",
            cursor: "pointer",
          }}
        >
          Refresh
        </button>

        <button
          onClick={() => setShow(false)}
          style={{
            padding: "8px 10px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Later
        </button>
      </div>
    </div>
  );
}
