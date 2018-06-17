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
import { API_END_POINT, API_HEADER,
  API_CREATE_TODO, API_REF_LIST, API_DELETE_TODO } from '../../consts/TodoConsts'

export default {
  name: 'Tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    // --------------------------------------------------
    // タスク取得
    // --------------------------------------------------
    axios.create(API_HEADER)
    .get(API_END_POINT + API_REF_LIST)
    .then(response => {
      let _tasks = response.data || []
      _tasks.forEach( task => {
        this.tasks.push(task)
      })
    })
    .catch(error => {
      if (error) { }
    })
  },
  components: {
    CreateTask,
    ReferenceTasks
  },
  methods: {
    // --------------------------------------------------
    // タスク作成
    // --------------------------------------------------
    createTask: function (task) {
      axios.create(API_HEADER)
      .post(API_END_POINT + API_CREATE_TODO,
      {
        'id': '',
        'contents': task,
        'user': '1'
      })
      .then (response => {
        this.tasks.push(response.data)
      })
      .catch (function (error, data) {
        if (error) {
          console.log(error)
          console.log(data)
        }
      })
    },
    // --------------------------------------------------
    // タスク削除
    // --------------------------------------------------
    deleteTask: function (taskId) {
      axios.create(API_HEADER)
      .delete(API_END_POINT + API_DELETE_TODO + '/' + taskId)
      .then(response => {
        console.log('削除成功')
      })
      .catch(error => {
        console.log(error)
        if (error) { }
      })
    }
  }
}
</script>

<style scoped>
</style>
