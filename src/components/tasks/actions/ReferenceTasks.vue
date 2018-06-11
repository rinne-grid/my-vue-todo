<template>
  <div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>No</th>
          <th>タスク</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{index+1}}</td>
          <td>{{task}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ReferenceTasks',
  props: {
    'tasks': {
      type: Array
    }
  }
}
</script>
<style scope>
</style>
