import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'index',
          component: () => import(/* webpackChunkName: "about" */ '@/views/index.vue'),
          children: [
              {
                  path: 'home',
                  name: 'home',
                  component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
                  props: { showfoot: true }
              },
              {
                  path: 'resume',
                  name: 'resume',
                  component: () => import(/* webpackChunkName: "about" */ '@/views/Resume.vue')
              }
          ]
      }
  ]
})
