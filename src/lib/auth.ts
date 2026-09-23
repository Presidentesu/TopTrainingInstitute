import crypto from "crypto";

export const INQUIRY_ADMIN_EMAIL =
  process.env.INQUIRY_ADMIN_EMAIL || "toptrainings2020@gmail.com";
export const INQUIRY_ADMIN_PASSWORD =
  process.env.INQUIRY_ADMIN_PASSWORD || "TopTraining@2020";
const INQUIRY_ADMIN_SECRET =
  process.env.INQUIRY_ADMIN_SECRET || "top-training-secret-key-addis-ababa-2026";

export const ADMIN_COOKIE_NAME = "tti_admin_session";

/**
 * Verify given email & password against configured admin credentials.
 */
export function verifyAdminCredentials(email?: string, password?: string): boolean {
  if (!email || !password) return false;
  const cleanEmail = email.trim().toLowerCase();
  const targetEmail = INQUIRY_ADMIN_EMAIL.trim().toLowerCase();

  return cleanEmail === targetEmail && password === INQUIRY_ADMIN_PASSWORD;
}

/**
 * Generate a signed session token: Base64(email:expiresAt:signature)
 */
export function generateSessionToken(email: string): string {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload = `${email.trim().toLowerCase()}:${expiresAt}`;
  const hmac = crypto.createHmac("sha256", INQUIRY_ADMIN_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");

  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

/**
 * Verify session token.
 */
export function verifySessionToken(token?: string | null): { valid: boolean; email?: string } {
  if (!token) return { valid: false };

  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const parts = decoded.split(":");
    if (parts.length !== 3) return { valid: false };

    const [email, expiresAtStr, signature] = parts;
    const expiresAt = parseInt(expiresAtStr, 10);
    if (isNaN(expiresAt) || Date.now() > expiresAt) {
      return { valid: false };
    }

    const payload = `${email}:${expiresAtStr}`;
    const hmac = crypto.createHmac("sha256", INQUIRY_ADMIN_SECRET);
    hmac.update(payload);
    const expectedSignature = hmac.digest("hex");

    if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return { valid: true, email };
    }
    return { valid: false };
  } catch {
    return { valid: false };
  }
}
