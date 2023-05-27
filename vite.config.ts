/*
 * @Author: Mx
 * @Date: 2023-05-27 14:38:32
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; //这个path用到了上面安装的@types/node
import viteCompression from 'vite-plugin-compression'; // gzip 压缩

// https://vitejs.dev/config/
export default ({ mode }) => {
  const baseUrl = loadEnv(mode, process.cwd()).VITE_BASE_URL;
  return defineConfig({
    plugins: [
      vue(),
      viteCompression({
        //生成压缩包gz
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
      proxy: {
        '/api': {
          target: baseUrl,
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    // 配置别名
    resolve: {
      alias: {
        '@': resolve('./src'), // @代替src
        '#': resolve('./types'), // #代替types
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
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
