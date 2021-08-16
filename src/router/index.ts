import { getItem } from '@/utils/storage'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/view/Login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/view/Home/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
router.beforeEach((to) => {
  // console.log(to)

  if (!getItem('token') && to.path !== '/login') {
    return '/login'
  }
})

export default router
