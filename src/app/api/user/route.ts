import { auth } from "@clerk/nextjs";
import { getUser } from "~/utils/database";

export async function GET(request: Request) {
  const params = new URLSearchParams(new URL(request.url).search);
  const email = params.get("email")

  if (!email) {
    return new Response(JSON.stringify({ error: "please provide an email" }), {
      status: 400,
    });
  }

  const user = auth();

  if (!user.sessionClaims) {
    return new Response(JSON.stringify({ error: "no user found!" }), {
      status: 400,
    });
  }

  const { error, data } = await getUser(email);

  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
  });
}
