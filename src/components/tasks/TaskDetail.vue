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
import axios from 'axios'
import { API_END_POINT, API_HEADER, API_UPDATE_TODO } from '../../consts/TodoConsts'
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
    // タスク(front)更新用のAPI呼び出し
    // --------------------------------------------------
    updateTask: function () {
      let pk = this.$route.params.task.id
      axios.create(API_HEADER)
      .put(API_END_POINT + API_UPDATE_TODO, {
        'id': pk,
        'contents': this.newTaskName,
        'user': '1'
      })
      .then(response => {
        console.log('更新成功')
      })
      .catch(error => {
        if (error) { }
        console.log(error)
        console.log('更新失敗')
      })
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
