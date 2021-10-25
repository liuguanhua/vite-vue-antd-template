import { createApp } from 'vue'
import App from './App.vue'

import { setupAntd } from './utils'

import router from './router'
import store from './store'

// import 'ant-design-vue/dist/antd.less'
import '@/assets/styles/sass/global.scss'
import '@/assets/styles/common.less'

const app = createApp(App)

setupAntd(app)

app.use(store).use(router).mount('#app')
