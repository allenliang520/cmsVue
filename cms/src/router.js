import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue'),
      children: [
        {
          name: "测试1",
          path: "test1",
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
        },
        {
          name: "测试2",
          path: "test2",
          component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
        },
      ]
    },
  ]
})
