import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TaskManagement.vue')
    },
    {
      path: '/task-detail/:id',
      name: 'TaskDetailPage',
      component: () => import('../components/TaskDetailPage.vue')
    }
  ],
})

export default router
