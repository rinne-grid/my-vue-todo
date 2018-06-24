<template>
  <div>
    <create-task @create-task="createTask"  />
    <!-- <div class="rngd-spinner">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div> -->
    <reference-tasks v-bind:tasks="this.$store.getters['TaskModule/tasks']" />
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
    if (this.$store.getters['LoginModule/token'] !== '') {
      this.$store.dispatch('TaskModule/setTasksService').then(() => {
        this.tasks = this.$store.getters['TaskModule/tasks']
      })
    } else {
      this.$router.push('/login')
    }
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
    createTask: function (task, callback) {
      let toggleLoading = callback
      toggleLoading()
      this.$store.dispatch('TaskModule/createTaskService', task).then(() => {
        toggleLoading()
      }).catch(() => {
        toggleLoading()
      })
    },
    // --------------------------------------------------
    // タスク削除
    // --------------------------------------------------
    deleteTask: function (taskId) {
      this.$store.dispatch('TaskModule/deleteTaskService', taskId)
    }
  }
}
</script>

<style scoped>
.rngd-spinner {
  margin-left: auto;
  margin-right: auto;
}
</style>
