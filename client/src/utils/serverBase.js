// Where the WeCode server lives. Stashr is the ONLY source (the "wecode" Server URLs list): there is no env host and no
// fallback address. Every endpoint keeps its own path; only the host part follows Stashr. Switched off or never reached
// means the endpoints that point at the main server reach no server (the last answer Stashr gave is kept).
// The Stashr address comes from the build env (REACT_APP_STASHR_SERVER_URL, written by Stashr when its main server
// changes). The old address is only the default when that variable is not set.
const REGISTRY_HOST = String(process.env.REACT_APP_STASHR_SERVER_URL || "https://password-manager-server-xxdr.onrender.com").trim().replace(/\/+$/, "");
const APP = "wecode";
const CACHE_KEY = "stashr.server." + APP;
// Used as the host when Stashr has none: every request then fails at once.
const NO_SERVER = "https://stashr-no-server.invalid";
const originOf = (url) => { try { return new URL(url).origin; } catch { return ""; } };

const readCache = () => { try { const v = JSON.parse(localStorage.getItem(CACHE_KEY)); return v && typeof v.origin === "string" ? v : null; } catch { return null; } };
const writeCache = (origin) => { try { localStorage.setItem(CACHE_KEY, JSON.stringify({ origin })); } catch { /* private mode */ } };
let base = (() => { const c = readCache(); return c ? c.origin || NO_SERVER : NO_SERVER; })();

/** Stashr's answer: { origin } (empty = switched off), or null when Stashr cannot be reached. */
async function fetchFromStashr(timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${REGISTRY_HOST}/registry/${APP}`, { signal: controller.signal });
    if (!res.ok) return null;
    return { origin: originOf(((await res.json()).urls || [])[0]) };
  } catch { return null; } finally { clearTimeout(timer); }
}

/** Called once before the app loads: instant with a saved answer (refreshed in the background), else waits for Stashr. */
export async function resolveServerBase() {
  const cached = readCache();
  if (cached) {
    base = cached.origin || NO_SERVER;
    fetchFromStashr(60000).then((answer) => { if (answer) writeCache(answer.origin); });
    return base;
  }
  const answer = await fetchFromStashr(30000);
  if (answer) { writeCache(answer.origin); base = answer.origin || NO_SERVER; }
  return base;
}

/** An endpoint address from the build-time env. Only its path is used (a full URL or just "/login"); the host always comes from Stashr. */
export function srv(url) {
  if (!url) return url;
  try { const u = new URL(url, "http://stashr.invalid"); return base + u.pathname + u.search + u.hash; } catch { return url; }
}
