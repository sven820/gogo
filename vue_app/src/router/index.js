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
          props: function (route) {
              let showfoot = false
              if (route.name == 'home') {
                  showfoot = true
              }else if(route.name == 'resume') {
                  showfoot = false
              }
              return {showfoot: showfoot}
          },
          children: [
              {
                  path: '/',
                  name: 'home',
                  component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
              },
              {
                  path: 'home',
                  name: 'home',
                  component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
              },
              {
                  path: 'resume',
                  name: 'resume',
                  component: () => import(/* webpackChunkName: "about" */ '@/views/Resume.vue')
              },
              {
                  path: 'detail',
                  name: 'detail',
                  component: () => import('@/views/Detail.vue'),
              }
          ]
      },

  ]
})
