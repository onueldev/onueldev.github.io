import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import './i18n'
import App from './App.tsx'

// 빌드 시 Node 환경에서 각 라우트를 정적 HTML로 렌더링한다.
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
