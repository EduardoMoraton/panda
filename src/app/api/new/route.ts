import { auth } from "@clerk/nextjs";
import { User } from "~/types/mongo";
import { appliances } from "~/utils/data";
import { saveUser } from "~/utils/database";

export async function POST(request: Request) {
  const body = await request.json() as {
    email: string;
    appliances: typeof appliances;
  };

  const { sessionClaims } = auth();

  if (!sessionClaims) {
    return new Response(JSON.stringify({ error: "no user found!" }), {
      status: 400,
    });
  }

  const user: User = {
    email: body.email,
    appliances: body.appliances.map((obj) =>
      Object.assign(obj, { applianceId: crypto.randomUUID() })
    ),
    log: [],
    joinedAt: new Date(),
    lastReportDate: null,
    reportFrequency: "monthly",
  };

  const { error, data } = await saveUser(user);

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(JSON.stringify({ data }), { status: 200 });
}
