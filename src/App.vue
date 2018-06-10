<template>
  <div id="app">
    <!-- ナビゲーション -->
    <navigation-bar />
    <!-- タスク登録コンポーネント -->
    <create-task />
    <!-- <router-view/> -->
    <!-- タスク表示コンポーネント -->
    <reference-tasks v-bind:tasks="tasks" />
  </div>
</template>

<script>
import NavigationBar from './components/menu/NavigationBar'
import CreateTask from './components/CreateTask'
import ReferenceTasks from './components/ReferenceTasks'

export default {
  name: 'App',
  data () {
    return {
      tasks: []
    }
  },
  components: {
    NavigationBar,
    CreateTask,
    ReferenceTasks
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

.brand-text {
  font-size: 1.6rem;
}
</style>
