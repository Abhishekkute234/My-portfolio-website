import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { NextApiRequest } from 'next';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-dev-secret-change-in-production';
const COOKIE_NAME = 'portfolio_auth_token';

// ---------------------------------------------------------------------------
// Password helpers
// ---------------------------------------------------------------------------

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// ---------------------------------------------------------------------------
// JWT helpers
// ---------------------------------------------------------------------------

export interface TokenPayload {
  id: string;
  email: string;
  name?: string | null;
}

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Session helper — reads httpOnly cookie from the incoming request
// ---------------------------------------------------------------------------

export function getSessionUser(req: NextApiRequest): TokenPayload | null {
  // Try cookie first
  const raw = req.cookies?.[COOKIE_NAME];
  if (raw) {
    return verifyToken(raw);
  }
  // Fallback: Authorization: Bearer <token>
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    return verifyToken(authHeader.split(' ')[1]);
  }
  return null;
}

// ---------------------------------------------------------------------------
// Cookie serialiser helpers (used in API response headers)
// ---------------------------------------------------------------------------

export function makeAuthCookie(token: string): string {
  const maxAge = 60 * 60 * 24 * 7; // 7 days in seconds
  return `${COOKIE_NAME}=${token}; Max-Age=${maxAge}; Path=/; HttpOnly; SameSite=Lax`;
}

export function clearAuthCookie(): string {
  return `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax`;
}
