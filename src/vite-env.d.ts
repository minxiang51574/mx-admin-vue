// / <reference types="vite/client" />
interface ImportMetaEnv {
  [x: string]: string | undefined;
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
