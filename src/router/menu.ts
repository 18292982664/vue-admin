import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const menu: Array<RouteRecordRaw> = [ 
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard/index.vue')
  },
]

export default menu
