<template>
  <div>
    <create-task @create-task="createTask"  />
    <reference-tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
import CreateTask from './actions/CreateTask'
import ReferenceTasks from './actions/ReferenceTasks'
import axios from 'axios'
import { API_END_POINT, API_HEADER, API_CREATE_TODO, API_REF_LIST } from '../../consts/TodoConsts'

export default {
  name: 'Tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    axios.create(API_HEADER)
    .get(API_END_POINT + API_REF_LIST)
    .then(response => {
      let _tasks = response.data || []
      console.log(_tasks)
      _tasks.forEach( task => {
        console.log(task)
        this.tasks.push(task.contents)
      })
    })
    .catch(error => {
      if (error) { }
    })
    // this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    // if (this.tasks === null || this.tasks === undefined) {
    //   this.tasks = []
    // }
  },
  components: {
    CreateTask,
    ReferenceTasks
  },
  methods: {
    createTask: function (task) {
      // this.tasks.push(task)
      axios.create(API_HEADER)
      .post(API_END_POINT + API_CREATE_TODO,
      {
        'id': '',
        'contents': task,
        'user_id': 'main'
      })
      .then (response => {
        console.log('登録に成功')
        console.log(response)
        this.tasks.push(response.data.contents)
      })
      .catch (function (error, data) {
        if (error) {
          console.log(error)
          console.log(data)
          console.log('登録に失敗')
        }
      }, this)

      // this.saveTask()
    },
    updateTask: function (task, index) {
      this.saveTask()
    },
    saveTask: function () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>

<style scoped>
</style>
