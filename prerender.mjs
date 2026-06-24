// 빌드된 서버 번들로 각 라우트를 정적 HTML로 프리렌더한다.
// 결과적으로 GitHub Pages가 /privacy, /terms 등을 실제 파일로 200 응답한다.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(root, 'dist')
const serverDir = path.join(distDir, 'server')

const { render } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// App의 <Routes>와 동일한 경로 목록
const routes = ['/', '/terms', '/privacy']

for (const route of routes) {
  const appHtml = render(route)
  const html = template.replace('<!--app-html-->', appHtml)
  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
  console.log(`prerendered ${route} -> ${path.relative(root, outPath)}`)
}

// 서버 번들은 배포 산출물에서 제외
fs.rmSync(serverDir, { recursive: true, force: true })
