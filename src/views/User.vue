<template>
  <div>
    <div class="user">
      <img alt="Vue logo"
           src="../assets/logo.png">
      <div class="name">{{name}}</div>
      <p>欢迎来到个人中心</p>
    </div>
    <div class="ctrls">
      <router-link :to="{name: 'add'}"
                   class="userBtn">添加</router-link>
    </div>
    <div class="ctrls">
      <router-link :to="{name: 'login'}"
                   class="userBtn">注销</router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: "List",
  store,
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    let localName = JSON.parse(window.localStorage.localUser)
    this.name = localName[0].name
  }
}
</script>

<style scoped lang="scss">
$main-color: #42b983;
.user {
  text-align: center;
  font-size: 18px;
  .name {
    padding: 10px;
    font: bold 28px 微软雅黑;
  }
}
.ctrls {
  text-align: center;
  padding-top: 40px;
}

.userBtn {
  display: block;
  width: 90%;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  background: $main-color;
  margin: 0 auto;
  color: #fff;
}
</style>
