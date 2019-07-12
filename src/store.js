import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moment from 'moment'

export default new Vuex.Store({
  state: {
    userData: [],
    lists: [],
    index: -1
  },
  mutations: {
    addUser (state, value) {
      // let userObj = { name: value.name, password: value.password }
      // console.log(value)
      state.userData.push(value)
      // console.log(state.userData)
      window.localStorage.localUser = JSON.stringify(state.userData)

    },
    addList (state, value) {
      if (window.localStorage.localLists) {   //判断是否存在
        state.lists = JSON.parse(window.localStorage.localLists)
        // console.log(state.lists)
      } else {
        state.lists = []
      }

      value.time = moment(value.time).format('YYYY-MM-DD HH:mm')
      // 时间处理
      state.lists.push(value)
      // 新数据push进数组
      // console.log(value)
      window.localStorage.localLists = JSON.stringify(state.lists)
      // 存储数据到本地
    },
    removeItem (state, value) {
      state.lists.splice(value, 1)
    }
  },
  actions: {

  }
})
