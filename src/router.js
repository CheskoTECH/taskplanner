import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import About from './views/About.vue'
// import CreateTask from './views/CreateTask.vue'
// import Resources from './views/Resources.vue'
// import Tasks from './views/Tasks.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('./views/About.vue')
    },
    {
      path: '/createtask',
      name: 'createtask',
      component: () => import('./views/CreateTask.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./views/Tasks.vue')
    }
  ]
})
