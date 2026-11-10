import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { doors } from './content/doors.js'
import './styles.css'

export const routes = [
  { path: '/', component: () => import('./views/LandingView.vue') },
  { path: '/cs', component: () => import('./views/DoorView.vue'), props: { door: doors.cs } },
  { path: '/eng', component: () => import('./views/DoorView.vue'), props: { door: doors.eng } },
]

export const createApp = ViteSSG(App, { routes })
