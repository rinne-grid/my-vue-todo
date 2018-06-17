<template>
  <div class="update-task">
    <div class="field">
      <label class="label">タスクを更新</label>
      <div class="control">
        <input type="text" v-model="newTaskName" class="input" />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button @click="updateTask" class="button is-link">更新</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskDetail',
  data: function () {
    return {
      newTaskName: ''
    }
  },
  mounted: function () {
    this.newTaskName = this.$route.params.taskName
  },
  methods: {
    updateTask: function () {
      let taskIndex = this.$route.params.id
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      tasks[taskIndex - 1] = this.newTaskName
      localStorage.setItem('tasks', JSON.stringify(tasks))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.update-task {
  padding: 30px;
}
</style>
