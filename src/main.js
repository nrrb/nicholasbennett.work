import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles.css'

export const routes = [
  { path: '/dev-preview', component: () => import('./views/LandingView.vue') },
  { path: '/', component: () => import('./views/ParkingView.vue') },
  { path: '/cs', component: () => import('./views/ParkingView.vue') },
  { path: '/eng', component: () => import('./views/ParkingView.vue') },
]

export const createApp = ViteSSG(App, { routes })
