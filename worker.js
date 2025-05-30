// worker.js
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // 匹配 Next.js 静态文件路径
    return await getAssetFromKV(event, {
      mapRequestToAsset: req => {
        let url = new URL(req.url)
        url.pathname = '/build' + url.pathname  // 匹配你的构建目录
        return new Request(url.toString(), req)
      }
    })
  } catch (e) {
    return new Response('Page not found', { status: 404 })
  }
}