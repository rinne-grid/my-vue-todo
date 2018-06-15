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
  components: {
    CreateTask,
    ReferenceTasks
  },
  methods: {
    createTask: function (task) {
      this.tasks.push(task)
    },
    updateTask: function (task, index) {
      this.tasks.splice(this.tasks, index, task)
    }
  }
}
</script>

<style scope>
</style>
