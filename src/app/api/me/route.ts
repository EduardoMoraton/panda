import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getUser } from "~/utils/database";

export async function GET(request: Request) {
  const { sessionClaims } = auth();

  return NextResponse.json({ sessionClaims });
}
