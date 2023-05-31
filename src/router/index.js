import { createRouter, createWebHistory } from 'vue-router'
import Timetable from '@/pages/TimetablePage'
import SearchPage from "@/pages/SearchPage";
const routes = [
  { path: '/:group', component: Timetable, name: 'timetable'},
  // { path: '/:group', component: test2page, name: 'test2'},
  { path: '/', component: SearchPage, name: 'home'},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
