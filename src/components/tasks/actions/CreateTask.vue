<template>
  <div class="create-task">
    <form class="field" v-on:submit="taskCreate" >
      <label class="label">タスク</label>
      <div class="control">
        <input type="text" v-model="modelTaskText" class="input" />
      </div>
    </form>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button @click="taskCreate"  class="button is-link">タスクを追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTask',
  data () {
    return {
      modelTaskText: ''
    }
  },
  methods: {
    taskCreate: function () {
      this.$emit('create-task', this.modelTaskText)
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
