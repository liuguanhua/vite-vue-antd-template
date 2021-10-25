import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

import vitePluginImp from 'vite-plugin-imp' //vite-plugin-babel-import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          style(name) {
            return `ant-design-vue/es/${name}/style/index.css`
          },
        },
      ],
    }),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'vue'`,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { 'primary-color': '#639' },
        javascriptEnabled: true,
      },
      scss: {
        additionalData: `@import "./src/assets/styles/sass/common/variable";`,
      },
    },
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue'],
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
})
