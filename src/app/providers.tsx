"use client";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Analytics />
      <>{children}</>
    </>
  );
}
