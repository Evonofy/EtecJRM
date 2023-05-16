const cacheName = 'etec-v1'
const staticAssets = [
    './',
    './index.html',
    './paginas/proposito.html',
    './paginas/espacoAluno.html',
    './paginas/cursosTecnicos.html',
    './paginas/faleConosco.html',
    './css/index.css',
    './css/proposito.css',
    './css/espacoAluno.css',
    './css/cursosTecnicos.css',
    './css/faleConosco.css',
    './recursos/svg/etec.svg',
    './recursos/images/background-images/etecjrm.jpg',
    './recursos/images/background-images/etecjrm2.jpg',
    './recursos/images/background-images/etecjrm3.jpg',
    './recursos/images/background-images/etecjrm4.jpg',
    './recursos/images/background-images/etecjrm6.jpg'
]

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName)
    await cache.addAll(staticAssets)
    return self.skipWaiting()
}) 

self.addEventListener('activate', e => {
    self.clients.claim()
})

self.addEventListener('fetch', async e => {
    const req = e.request
    const url = new URL(req.url)

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req))
    } else {
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req) {
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)
    return cached || fetch(req)
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName)
    try {
        const fresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return fresh
    } catch (e) {
        const cached = await cache.match(req)
        return cached
    }
}