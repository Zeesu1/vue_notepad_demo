<template>
  <form class="form-wrapper">
    <h1 class="info">Welcome</h1>
    <div class="form-input">
      <label for="l-name">用户名</label>
      <input id="l-name"
             type="text"
             placeholder="Name"
             v-model="name">
    </div>
    <div class="form-input">
      <label for="l-pwd">密&nbsp;&nbsp;&nbsp;码</label>
      <input id="l-pwd"
             type="password"
             placeholder="Password"
             v-model="password">
    </div>
    <div class="btns">
      <button type="button"
              @click="submit()">登录</button>
      <button type="button"
              @click="()=>{this.$router.push('/reg')}">注册</button>
    </div>

  </form>
</template>

<script>
import store from '@/store.js'
export default {
  name: "LoginForm",
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    submit () {
      // console.log(window.localStorage.localUser)
      let userData = JSON.parse(window.localStorage.localUser)
      let isLogin = false
      if (this.name == '') {
        alert('用户名不能为空')
      } else if (this.password == '') {
        alert('密码不能为空')
      } else {
        for (let i = 0; i < userData.length; i++) {
          if (this.name == userData[i].name) {
            isLogin = true
            store.state.index = i
            // console.log(store.state.index)
          }
        }
        if (!isLogin) {
          alert('登录失败！用户名不存在！')
        } else {
          if (this.password == userData[store.state.index].password) {
            this.$router.push({ name: 'user' })
          } else {
            alert('登录失败！密码错误！')
          }
        }
      }

      /*       (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
              this.$router.push({ name: 'user' })
            }  */

    }
  }
}
</script>

<style scoped>
.form-wrapper {
  margin-top: 50px;
}
.info {
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
}
.form-input {
  margin-top: 12px;
}
input:active,
input:hover {
  border: 1px solid #42b983;
}
</style>
