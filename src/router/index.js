import { createRouter, createWebHistory } from 'vue-router'
import Timetable from '@/views/Timetable'
import SearchView from "@/views/SearchView";
const routes = [
  { path: '/timetable/:id', component: Timetable},
  { path: '/', component: SearchView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
