import type { Component } from 'vue'
import Index from '@/pages/index.vue'

export type Routes = '/' | '/timetable' | '/rooms' | '/users' | '/groups' | '/devices' | '/preferences' | '/archive'

export const routes: { path: Routes, component: Component }[] = [
  {
    path: '/timetable',
    component: Index,
  },
  {
    path: '/archive',
    component: Index,
  },
  {
    path: '/devices',
    component: Index,
  },
  {
    path: '/groups',
    component: Index,
  },
  {
    path: '/preferences',
    component: Index,
  },
  {
    path: '/rooms',
    component: Index,
  },
  {
    path: '/users',
    component: Index,
  },
  {
    path: '/',
    component: Index,
  },
]
