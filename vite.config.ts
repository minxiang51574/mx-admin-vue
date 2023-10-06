import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression'; // gzip 压缩

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;
  return defineConfig({
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://minxiang.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https:/minxiang.vip/admin/，则设置 baseUrl 为 /admin/。
    base: VITE_APP_ENV === 'production' ? '/admin/' : '/',
    plugins: [
      vue(),
      vueJsx(),
      viteCompression({
        // 生成压缩包gz
        verbose: true, // 输出压缩成功
        disable: false, // 是否禁用
        threshold: 1, // 体积大于阈值会被压缩，单位是b
        algorithm: 'gzip', // 压缩算法
        ext: '.gz', // 生成的压缩包后缀
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      // proxy: {
      //   '/dev-api': {
      //     target: 'http://127.0.0.1:8001',
      //     changeOrigin: true,
      //     ws: true,
      //     rewrite: (path: string) => path.replace(/^\/dev-api/, ''),
      //   },
      //   '/pro-api': {
      //     target: 'https://minxiang.vip',
      //     changeOrigin: true,
      //     rewrite: (path: string) => path.replace(/^\/pro-api/, ''),
      //   },
      // },
    },
    // 配置别名
    resolve: {
      alias: {
        '@': resolve('./src'), // @代替src
        '#': resolve('./types'), // #代替types
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            elementPlus: ['element-plus'],
            vue: ['vue', 'pinia', 'vue-router'],
          },
        },
      },
    },
  });
};
