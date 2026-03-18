// ============================================================
// Service Worker — Vite React Ecommerce App
// Strategy:
//   • Static/local assets  → Cache First
//   • Navigation requests  → Network First
//   • API / dynamic data   → Network Only (no caching)
// ============================================================

const CACHE_VERSION = "v1"
const STATIC_CACHE = `static-${CACHE_VERSION}`

const STATIC_ASSETS = [
	"/offline.html",
	"/index.html",
	"/manifest.json",
	"/favicon.ico",
	"/favicon-16x16.png",
	"/favicon-32x32.png",
	"/icons/android-chrome-192x192.png",
	"/icons/android-chrome-512x512.png",
	"/icons/apple-touch-icon.png",
]

// ─── Install ────────────────────────────────────────────────
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(STATIC_CACHE)
			.then((cache) => cache.addAll(STATIC_ASSETS))
			.then(() => self.skipWaiting()),
	)
})

// ─── Activate ───────────────────────────────────────────────
self.addEventListener("activate", (event) => {
	const CURRENT_CACHES = [STATIC_CACHE]

	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				Promise.all(
					cacheNames
						.filter((name) => !CURRENT_CACHES.includes(name))
						.map((name) => caches.delete(name)),
				),
			)
			.then(() => self.clients.claim()),
	)
})

self.addEventListener("fetch", (event) => {
	const { request } = event
	const url = new URL(request.url)

	if (request.method !== "GET") return
	if (url.origin !== self.location.origin) return
	if (url.pathname.startsWith("/@")) return

	// ── Block: Vite dev server internals, never cache ────────
	if (
		url.pathname.startsWith("/node_modules/") ||
		url.pathname.startsWith("/src/") ||
		url.searchParams.has("v") // Vite dep query params e.g. ?v=a8607795
	)
		return

	// ── Route: HTML navigation requests ─────────────────────
	if (request.mode === "navigate") {
		event.respondWith(networkFirstWithOfflineFallback(request))
		return
	}

	// ── Route: all assets (static, Vite chunks, icons, etc.) ─
	event.respondWith(cacheFirst(request, STATIC_CACHE))
})

// ─── Dedicated message handler ──────────────────────────────
self.addEventListener("message", (event) => {
	if (event.data?.type === "SKIP_WAITING") {
		self.skipWaiting()
	}
})

// ============================================================
// Helpers
// ============================================================

// ─── Strategy: Cache First ───────────────────────────────────
async function cacheFirst(request, cacheName) {
	const cache = await caches.open(cacheName)
	const cached = await cache.match(request)

	if (cached) return cached

	try {
		const networkResponse = await fetch(request)
		if (networkResponse.ok) {
			cache.put(request, networkResponse.clone())
		}

		return networkResponse
	} catch {
		return new Response("Resource unavailable offline.", {
			status: 503,
			headers: { "Content-Type": "text/plain" },
		})
	}
}

// ─── Strategy: Network First with Offline Fallback ───────────
async function networkFirstWithOfflineFallback(request) {
	try {
		return await fetch(request)
	} catch {
		const cache = await caches.open(STATIC_CACHE)
		const offlinePage = await cache.match("/offline.html")
		return offlinePage
	}
}
