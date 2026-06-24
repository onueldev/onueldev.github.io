import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import i18n, { detectClientLang } from './i18n'
import '@fontsource/geist/400.css'
import '@fontsource/geist/500.css'
import '@fontsource/geist/600.css'
import '@fontsource/geist/700.css'
import '@fontsource/geist/900.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const rootEl = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// 프로덕션 빌드는 프리렌더된 마크업이 있으므로 hydrate, dev 모드(빈 root)는 일반 렌더.
if (rootEl.childElementCount > 0) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}

// 프리렌더는 "ko"로 고정되어 있으므로, hydration 이후 실제 브라우저 언어로 보정한다.
const clientLang = detectClientLang()
if (clientLang !== i18n.language) {
  i18n.changeLanguage(clientLang)
}
