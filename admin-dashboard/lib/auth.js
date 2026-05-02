import crypto from 'crypto';

const COOKIE_NAME = 'bhuwana_admin_session';

function getSecret() {
  return process.env.AUTH_SECRET || 'dev-only-secret-change-me';
}

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function sign(payload) {
  return crypto
    .createHmac('sha256', getSecret())
    .update(payload)
    .digest('base64url');
}

export function createSessionToken(email) {
  const body = {
    email,
    exp: Date.now() + 1000 * 60 * 60 * 8,
  };
  const payload = base64url(JSON.stringify(body));
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

export function verifySessionToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) {
    return null;
  }

  const [payload, signature] = token.split('.');
  const expected = sign(payload);

  if (signature !== expected) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
    if (!data.exp || data.exp < Date.now()) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

export function getCookieName() {
  return COOKIE_NAME;
}

export function validateCredentials(email, password) {
  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedEmail || !expectedPassword) {
    return false;
  }

  return email === expectedEmail && password === expectedPassword;
}
