import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    username,
    password,
  } = body;


  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      {
        message: "認証失敗",
      },
      {
        status: 401,
      }
    );
  }


  // JWT作成
  const token = await createToken(username);


  const response = NextResponse.json({
    message: "ログイン成功",
  });


  // Cookie保存
  response.cookies.set(
    "admin_token",
    token,
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    }
  );


  return response;
}