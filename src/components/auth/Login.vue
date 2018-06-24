<template>
  <div class="login-form">
    <div class="field">
      <div class="control">
        <input class="input" v-model="username">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input type="password" class="input" v-model="password">
      </div>
    </div>
    <a class="button is-info" @click="doLogin">ログイン</a>
    <div v-if="loginError">
      ログインに失敗しました
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      loginError: false
    }
  },
  methods: {
    doLogin () {
      console.log(this.username, this.password)
      let loginInput = {
        username: this.username,
        password: this.password,
        callbackError: this.handleLoginError
      }
      this.$store.dispatch('LoginModule/doLoginService', loginInput).then(() => {
        this.$router.push('/')
      })
    },
    handleLoginError () {
      this.loginError = true
    }
  }
}
</script>

<style scoped>
.login-form {
  padding: 30px;
}
</style>
