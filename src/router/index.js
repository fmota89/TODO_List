import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskList from '../views/TaskList.vue'
import AddTask from '../views/AddTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/task-list',
      name: 'task-list',
      component: TaskList
    },
    {
      path: '/add-task',
      name: 'add-task',
      component: AddTask
    }
  ]
})

export default router
