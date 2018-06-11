<template>
  <div>
    <!-- ナビゲーション -->
    <navigation-bar />
    <!-- タスクコンポーネント -->
    <router-view />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import NavigationBar from './components/menu/NavigationBar'
import Tasks from './components/tasks/Tasks'

export default {
  name: 'App',
  components: {
    NavigationBar,
    Tasks
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

.brand-text {
  font-size: 1.6rem;
}
</style>
