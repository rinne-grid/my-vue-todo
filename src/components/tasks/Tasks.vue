<template>
  <div>
    <create-task @create-task="createTask"  />
    <reference-tasks v-bind:tasks="this.$store.getters.tasks" />
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
    this.$store.dispatch('setTasksService')
    this.tasks = this.$store.getters.tasks
  },
  watch: {
    tasks: {
      handler: function () {
        console.log('watch')
      }
    }
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
      this.$store.dispatch('createTaskService', task)
    },
    // --------------------------------------------------
    // タスク削除
    // --------------------------------------------------
    deleteTask: function (taskId) {
      this.$store.dispatch('deleteTaskService', taskId)
    }
  }
}
</script>

<style scoped>
</style>
