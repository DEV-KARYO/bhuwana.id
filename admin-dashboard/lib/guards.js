import { getCookieName, verifySessionToken } from '@/lib/auth';

export function isAuthorized(request) {
  const token = request.cookies.get(getCookieName())?.value;
  return Boolean(verifySessionToken(token));
}
