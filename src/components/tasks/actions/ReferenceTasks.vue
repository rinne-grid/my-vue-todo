<template>
  <div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>No</th>
          <th>タスク</th>
          <th> Del </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index" v-if="tasks !== null && tasks !== undefined">
          <td>{{index+1}}</td>
          <td><router-link :to="{ name: 'update', params: { id: task.id, task: task}, props: { tasks: tasks }}">{{task.contents}}</router-link></td>
          <td><button class="button is-danger" @click="deleteTask($event, task.id)">削除</button></td>
        </tr>
      </tbody>
    </table>
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">削除します？</p>
          <button class="delete" aria-label="close" ></button>
        </header>
        <footer class="modal-card-foot">
          <button class="button is-danger is-right">削除する</button>
          <button class="button is-right">キャンセル</button>
        </footer>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ReferenceTasks',
  props: {
    'tasks': {
      type: Array
    }
  },
  methods: {
    // --------------------------------------------------
    // タスク(front)削除とAPI呼び出し
    // --------------------------------------------------
    deleteTask: function (event, id) {
      this.tasks.forEach( (task, index) => {
        if (task.id === id) {
          this.tasks.splice(index, 1)
        }
      })
      this.$parent.deleteTask(id)
    }
  }
}
</script>
<style scoped>
</style>
