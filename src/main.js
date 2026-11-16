import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles.css'

export const routes = [
  { path: '/', component: () => import('./views/CustomerSuccessView.vue') },
]
export const createApp = ViteSSG(App, { routes })
