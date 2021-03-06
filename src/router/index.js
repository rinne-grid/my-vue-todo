import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '@/components/tasks/Tasks'
import HelloWorld from '@/components/HelloWorld'
import TaskDetail from '@/components/tasks/TaskDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tasks,
      name: 'index'
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/update/:id/',
      component: TaskDetail,
      name: 'update'
    }
  ]
})
