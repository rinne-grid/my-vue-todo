<template>
  <div class="create-task">
    <div class="field">
      <label class="label">タスク</label>
      <div class="control">
        <input type="text" v-model="modelTaskText" class="input" />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button @click="taskCreate" class="button is-link">タスクを追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-task',
  data () {
    return {
      modelTaskText: '',
      memoryTask: []
    }
  },
  methods: {
    taskCreate: function () {
    // this.memoryTask = this.tasks
    // this.memoryTask.push(this.modelTaskText)
    // console.log(this.memoryTask)
      this.$parent.tasks.push(this.modelTaskText)
      this.modelTaskText = ''
    }
  }
}
</script>
<style scope>
.create-task {
  padding: 30px;
}
</style>
