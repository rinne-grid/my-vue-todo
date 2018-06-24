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
        <button @click="taskCreate"  v-bind:class="taskCreateButtonClass">タスクを追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTask',
  data () {
    return {
      modelTaskText: '',
      taskCreateButtonClass: {
        'button': true,
        'is-link': true,
        'is-loading': false
      }
    }
  },
  methods: {
    // --------------------------------------------------
    // タスク(front)作成とAPI呼び出し
    // --------------------------------------------------
    taskCreate: function () {
      // ここから
      let task = {
        id: '',
        contents: this.modelTaskText,
        user: '1'
      }
      this.$emit('create-task', task, this.toggleBtnLoading)
      this.modelTaskText = ''
    },
    toggleBtnLoading () {
      this.taskCreateButtonClass['is-loading'] = !this.taskCreateButtonClass['is-loading']
    }
  }
}
</script>
<style scoped>
.create-task {
  padding: 30px;
}
</style>
