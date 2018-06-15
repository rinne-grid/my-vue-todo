<template>
  <div>
    <div class="field">
      <label class="label">タスクを更新</label>
      <div class="control">
        <input type="text" v-model="newTaskName" class="input" />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button @click="updateTask" class="btn is-link">更新</button>
      </div>
    </div>

    {{myFunc()}}
  </div>
</template>

<script>
export default {
  name: 'TaskDetail',
  data () {
    return {
      newTaskName: ''
    }
  },
  props: {
    tasks: {
      type: Array
    }
  },
  mounted: function () {
    this.newTaskName = this.$route.params.taskName
  },
  methods: {
    myFunc: function () {
      console.log(this.$route.params)
    },
    updateTask: function () {
      let taskIndex = this.$route.params.index
      this.$emit('update-task', this.taskName, taskIndex)
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
