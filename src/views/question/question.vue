<template>
  <div id="question">
    <el-page-header @back="goBack"
                    class="header">
    </el-page-header>

    <div>
      <span class="time">时间 ：{{spendTime}} s</span>
      <el-button type="success"
                 round
                 plain
                 class="comfirm">提交</el-button>
    </div>

    <el-table :data="questions"
              class="main"
              @row-click="checkAns"
              height="650"
              style="width: 360%">

      <el-table-column prop="prob"
                       width="100%">
      </el-table-column>

      <el-table-column width="300%"
                       v-if='!showAns'>
        <input v-model="inputAns"
               class="inputAns"
               placeholder="请输入答案">
      </el-table-column>

      <el-table-column prop="ans"
                       style="text-align:center"
                       width="300%"
                       v-else>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

import store from '../../store/index'

Vue.use(VueAxios, Axios)

export default {
  name: 'question',
  data () {
    return {
      questions: [],   //{ans: , prob: }
      rightNum: 0,     //做对的题数
      spendTime: 0,     //花费的时间
      proNum: 0,        //题目总数
      inputAns: '',     //每次输入的答案
      showAns: false,   //是否显示答案
      timer: ''         //计时器
    }
  },
  methods: {
    checkAns (row, column, event) {

    },
    goBack () {
      this.$router.push({ path: '/pratice' })
    }
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    store.commit('Show')
    next()
  },
  created () {
    var postData = {
      pracType: this.$route.query.pracType,
      proNum: this.$route.query.proNum
    }
    this.$data.proNum = postData.proNum

    Vue.axios.post('/api/prodPratice', postData)
      .then(res => {
        if (res.data) {
          //console.log(typeof res.data)
          //console.log(res.data)
          this.$data.questions = res.data
          //console.log(this.$data.questions)
        }
        //console.log(res)
      }, err => {
        console.log(err)
      })

    this.$data.timer = setInterval(() => {
      this.$data.spendTime++
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.$data.timer)
  }
}
</script>

<style>
#question .inputAns {
  box-shadow: 0 2px 1px 0;
  width: 200px;
}

#question .time {
  z-index: 9999;
  position: absolute;
  top: 40px;
  left: 50px;
}

#question .comfirm {
  z-index: 9999;
  position: absolute;
  top: 30px;
  left: 190px;
}

#question .main {
  font-size: large;
  position: relative;
}
</style>