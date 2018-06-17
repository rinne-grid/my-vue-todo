<template>
    <nav class="navbar is-transparent is-info">
      <div class="navbar-brand">
        <router-link :to="{name: 'index'}"><a class="navbar-item"><span class="brand-text">Rngd Todo</span></a></router-link>
        <div class="navbar-burger" data-target="navMenu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- ナビゲーションメニュー -->
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            Home
          </a>

        </div>
        <div class="navbar-end">
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: 'NavigationBar'
}
</script>
<style scoped>
</style>
