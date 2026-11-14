import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles.css'

export const routes = [
  ...[1, 2, 3].map(version => ({ path: `/version${version}`, component: () => import('./views/VersionView.vue'), meta: { version } })),
  { path: '/dev-preview', component: () => import('./views/LandingView.vue') },
  { path: '/', component: () => import('./views/ParkingView.vue') },
  { path: '/cs', component: () => import('./views/ParkingView.vue') },
  { path: '/eng', component: () => import('./views/ParkingView.vue') },
]

export const createApp = ViteSSG(App, { routes })
