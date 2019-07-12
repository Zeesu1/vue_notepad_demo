<template>
  <form class="form-wrapper">
    <h1 class="info">Register</h1>
    <div class="form-input">
      <label for="r-name">用户名</label>
      <input id="r-name"
             type="text"
             placeholder="Please input name"
             v-model="name">
    </div>
    <div class="form-input">
      <label for="r-pwd">密&nbsp;&nbsp;&nbsp;码</label>
      <input id="r-pwd"
             type="password"
             placeholder="Please input password"
             v-model="password">
    </div>
    <div class="form-input">
      <label for="r-rep">重复密码</label>
      <input id="r-rep"
             type="password"
             placeholder="Please repeat password"
             v-model="passwordRepeart">
    </div>
    <div class="btns">
      <button type="button"
              @click="reg()">确定</button>
      <button type="button"
              @click="()=>{this.$router.back()}">取消</button>
    </div>
  </form>
</template>

<script>
import store from '@/store.js'
export default {
  name: "RegForm",
  store,
  data () {
    return {
      name: '',
      password: '',
      passwordRepeart: ''
    }
  },
  methods: {
    reg () {
      if (this.name == '') {
        alert('用户名不能为空')
      } else if (this.password == '') {
        alert('密码不能为空')
      } else if (this.password === this.passwordRepeart) {

        store.commit('addUser', {
          name: this.name,
          password: this.password
        })
        this.$router.push({ name: 'login' })
      } else {
        alert('请检查密码是否输入一致')
      }
    }
  },
  mounted () {
    if (window.localStorage.localUser) {   //判断是否存在
      store.state.userData = JSON.parse(window.localStorage.localUser)
      // console.log(state.userData)
    } else {
      store.state.userData = []
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
