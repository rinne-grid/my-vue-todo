<template>
  <div class="update-task">
    <form v-on:submit="updateTask">
      <div class="field">
        <label class="label">タスクを更新</label>
        <div class="control">
          <input type="text" v-model="newTaskName" class="input" />
        </div>
      </div>
    </form>
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
    this.newTaskName = this.$route.params.task.contents
  },
  methods: {
    // --------------------------------------------------
    // タスク更新
    // --------------------------------------------------
    updateTask: function () {
      let pk = this.$route.params.task.id
      let task = {
        'id': pk,
        'contents': this.newTaskName,
        'user': '1'
      }
      this.$store.dispatch('updateTaskService', task)
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
