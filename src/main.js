import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles.css'

export const routes = [
  { path: '/', component: () => import('./views/LandingView.vue') },
  { path: '/cs', component: () => import('./views/LandingView.vue') },
  { path: '/eng', component: () => import('./views/LandingView.vue') },
]

export const createApp = ViteSSG(App, { routes })
