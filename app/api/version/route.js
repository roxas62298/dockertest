import { NextResponse } from "next/server";

export const runtime = "nodejs"; // fine in Docker

export async function GET() {
  return NextResponse.json({
    version: process.env.NEXT_PUBLIC_APP_VERSION ?? "unknown",
    time: new Date().toISOString(),
  });
}
