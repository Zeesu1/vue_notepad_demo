<template>
  <div class="wrapper">
    <div class="title">{{obj.title}}</div>
    <div class="content">
      {{obj.content}}
    </div>
    <div class="back"
         @click="back()">返 回</div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ['obj'],
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$emit('backEvent')
    }
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
}
.content {
  font: 20px/1.5 sans-serif;
  padding: 10px 10px 40px 10px;
  line-height: 22px;
}
.back {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  background: $main-color;
  position: relative;
  bottom: 10px;
  color: #fff;
  text-align: center;
}
</style>
