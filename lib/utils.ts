import { type ClassValue, clsx } from 'clsx'
import * as jose from 'jose'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const iss = process.env.NEXT_PUBLIC_JWT_ISSUER
const aud = process.env.NEXT_PUBLIC_JWT_AUDIENCE
const exp = process.env.NEXT_PUBLIC_JWT_EXPIRATION_TIME
const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)

export const signJWT = async () => {
  return new jose.SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(iss!)
    .setAudience(aud!)
    .setExpirationTime(exp!)
    .sign(secret)
}

export const verify = async (token: string) => {
  return jose
    .jwtVerify(token, secret, {
      issuer: iss!,
      audience: aud!,
      maxTokenAge: exp!,
    })
    .then(() => true)
    .catch(() => false)
}
