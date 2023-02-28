import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'ProcessingCenter',
        name: 'ProcessingCenter',
        component: () => import ('@/views/ProcessingCenterView.vue')
      },
      {
        path: "OptionOne",
        component: () => import("@/views/OptionOneView.vue")
      },
      // * 路由放在最后
      {
        path: "*",
        component: () => import('@/views/NotFount.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
