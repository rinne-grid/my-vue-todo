<template>
  <div>
    <create-task @create-task="createTask"  />
    <reference-tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
import CreateTask from './actions/CreateTask'
import ReferenceTasks from './actions/ReferenceTasks'

export default {
  name: 'Tasks',
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    if (this.tasks === null || this.tasks === undefined) {
      this.tasks = []
    }
  },
  components: {
    CreateTask,
    ReferenceTasks
  },
  methods: {
    createTask: function (task) {
      this.tasks.push(task)
      this.saveTask()
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
