import Vue from 'vue'
import Router from 'vue-router'

import Tasks from '@/components/tasks/Tasks'
import TaskDetail from '@/components/tasks/TaskDetail'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tasks,
      name: 'index'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/update/:id/',
      component: TaskDetail,
      name: 'update'
    }
  ]
})
