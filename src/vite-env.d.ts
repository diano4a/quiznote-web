/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_AUTH_PROVIDER: string
  readonly VITE_JWT_SECRET_KEY: string
  readonly VITE_ENABLE_MOCK_API: string
  readonly VITE_ENABLE_DEBUG_MODE: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_DEV_PORT: string
  readonly VITE_PREVIEW_PORT: string
  readonly VITE_BUILD_SOURCEMAP: string
  readonly VITE_BUILD_ANALYZE: string
  readonly VITE_LOG_LEVEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
