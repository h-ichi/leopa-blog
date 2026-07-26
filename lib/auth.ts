import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
  throw new Error("JWT_SECRET is missing");
}

const secret = new TextEncoder().encode(secretKey);

export async function createToken(username: string) {
  return await new SignJWT({
    username,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      secret
    );

    return payload;

  } catch {
    return null;
  }
}