import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('../views/errorPage/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: { title: 'nested', icon: 'nested' },
    children: [
      {
        path: 'menu1',
        component: () => import('../views/nested/menu1/index'),
        name: 'Menu1',
        meta: { title: 'menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('../views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('../views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('../views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('../views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'menu1-2-2', roles: ['admin', 'editor'] }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('../views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'menu1-3', roles: ['admin'] }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('../views/nested/menu2/index'),
        meta: { title: 'menu2', roles: ['editor'] }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
