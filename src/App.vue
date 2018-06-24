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

$scale-outer: 128px;
$scale-inner: 140px;
/* https://loading.io/css/ */
.lds-ring {
  display: inline-block;
  position: relative;
  width: $scale-outer;
  height: $scale-outer;

}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: $scale-inner;
  height: $scale-inner;
  margin: 6px;
  border: 6px solid #fcf;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fcf transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
