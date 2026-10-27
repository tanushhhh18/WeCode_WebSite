// Where the WeCode server lives. The address is kept on Stashr (project "wecode-website" Server URLs), so moving the server
// needs no rebuild. Every endpoint keeps its own path; only the host part follows Stashr. If Stashr has no entry or
// cannot be reached, the build-time REACT_APP_* addresses are used exactly as before.
const REGISTRY_HOSTS = ["https://password-manager-server-xxdr.onrender.com", "https://password-manager-server-8gvj.onrender.com"];
const APP = "wecode-website";
const CACHE_KEY = "stashr.server." + APP;
const originOf = (url) => { try { return new URL(url).origin; } catch { return ""; } };
const BUILD_ORIGIN = originOf(process.env.REACT_APP_BACKEND_URI || process.env.REACT_APP_SERVER_CHECK || process.env.REACT_APP_LOGIN_URI);

const readCache = () => { try { return originOf(localStorage.getItem(CACHE_KEY)); } catch { return ""; } };
const writeCache = (url) => { try { localStorage.setItem(CACHE_KEY, url); } catch { /* private mode */ } };
let base = readCache();

async function fetchFromStashr(timeoutMs) {
  for (const host of REGISTRY_HOSTS) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(`${host}/registry/${APP}`, { signal: controller.signal });
      if (!res.ok) continue;
      const origin = originOf(((await res.json()).urls || [])[0]);
      if (origin) return origin;
    } catch { /* try the next Stashr server */ }
    finally { clearTimeout(timer); }
  }
  return "";
}

/** Called once before the app loads: instant with a saved address (refreshed in the background), else waits a few seconds. */
export async function resolveServerBase() {
  if (base) { fetchFromStashr(60000).then((origin) => { if (origin) writeCache(origin); }); return base; }
  const origin = await fetchFromStashr(6000);
  if (origin) { base = origin; writeCache(origin); }
  return base;
}

/** An endpoint address from the build-time env, moved to the Stashr server when it points at the main server. */
export function srv(url) {
  if (!url || !base || !BUILD_ORIGIN || originOf(url) !== BUILD_ORIGIN) return url;
  try { const u = new URL(url); return base + u.pathname + u.search + u.hash; } catch { return url; }
}
