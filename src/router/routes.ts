import { FunctionalComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { HomeOutlined, HeartOutlined } from '@ant-design/icons-vue'

const routes: (RouteRecordRaw & {
  title?: string
  hideInMenu?: boolean
  icon?: FunctionalComponent
})[] = [
  {
    name: 'home',
    path: '/',
    title: '首页',
    icon: HomeOutlined,
    component: () => import('@/pages/dashboard/index.vue'),
  },
  {
    name: 'weclome',
    path: '/weclome',
    title: '欢迎',
    icon: HeartOutlined,
    component: () => import('@/pages/weclome/index.vue'),
  },
  {
    name: '404',
    path: '/:w+',
    hideInMenu: true,
    // redirect: '/',
    component: () => import('@/pages/notFound/index.vue'),
  },
]
export default routes
