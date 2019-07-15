<template>
  <div class="wrapper">
    <div class="title">{{obj.title}}</div>
    <textarea class="content"
              v-model="obj.content"
              readonly>
    </textarea>
    <div class="back"
         @click="back()">返 回</div>
    <div class="remove"
         @click="remove()">删 除</div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ['obj', 'i'],
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$emit('backEvent')
    },
    remove () {
      if (confirm('确认删除这条记录吗？')) {
        let list = JSON.parse(window.localStorage.localLists)
        list.splice(this.i, 1)
        console.log(list)
        window.localStorage.localLists = JSON.stringify(list)
        this.$emit('backEvent')
        // 返回但是并没有刷新数据
      }
    }
  },
  mounted () {
    // console.log(this.obj)
    // console.log(this.i)
  }
}
</script>

<style scoped lang="scss">
$main-color: #42b983;
.wrapper {
  margin: 10px;
  padding: 10px;
  height: 90%;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.title {
  margin: 8px;
  font: bold 24px/1.5 sans-serif;
  padding-bottom: 5px;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
}
.content {
  margin-bottom: 16px;
  user-select: none;
  width: 100%;
  height: 400px;
  font: 20px/1.5 sans-serif;
  padding: 10px 10px 40px 10px;
  border: none;
  line-height: 22px;
}
.back {
  display: block;
  width: 45%;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  background: $main-color;
  position: relative;
  bottom: 10px;
  color: #fff;
  text-align: center;
  float: right;
}
.remove {
  display: block;
  width: 45%;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  background: red;
  position: relative;
  bottom: 10px;
  color: #fff;
  text-align: center;
}
</style>
