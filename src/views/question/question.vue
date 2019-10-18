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
                 v-show="!showAns"
                 @click="submit"
                 class="comfirm">提交</el-button>
      <div v-show="showAns"
           class="comfirm grade">
        {{rightNum}} / {{proNum}}
      </div>
    </div>

    <el-table :data="questions"
              class="main"
              @row-click="checkAns"
              height="650"
              :row-class-name="tableRowClassName"
              style="width: 380%">

      <div v-if='!showAns'>
        <el-table-column width="200%">
          <input type="text"
                 v-model="inputAns"
                 class="inputAns"
                 @blur='recordAns'
                 placeholder="">
        </el-table-column>
        <el-table-column prop="prob"
                         width="130%">
        </el-table-column>
      </div>

      <div v-else>
        <el-table-column prop="ans"
                         width="100%">
        </el-table-column>
        <el-table-column prop="prob"
                         width="100%">
        </el-table-column>
        <el-table-column prop="input"
                         width="100%">
        </el-table-column>
      </div>

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
      questions: [],   //{ans: , prob:, right:, index:, input}
      rightNum: 0,     //做对的题数
      spendTime: 0,     //花费的时间
      proNum: 0,        //题目总数
      inputAns: '',     //每次输入的答案
      showAns: false,   //是否显示答案
      timer: '',         //计时器
      index: 0          //正在做第几道题
    }
  },
  methods: {
    checkAns (row, column, event) {
      this.index = row.index
    },
    goBack () {
      this.$router.push({ path: '/pratice' })
    },
    recordAns () {
      if (this.inputAns == this.questions[this.index].ans) {
        this.questions[this.index].right = 1
        this.rightNum++
        //console.log(this.questions[this.index])
      }

      this.questions[this.index].input = this.inputAns
    },
    submit () {
      clearInterval(this.$data.timer)
      this.$store.state.praStart.start = 1
      this.$data.timer = -1
      this.showAns = true

      for (var i = 0; i < this.$data.proNum; i++) {
        if (this.$data.questions[i].right == 0) {
          let err = {
            ans: this.$data.questions[i].ans,
            prob: this.$data.questions[i].prob,
            input: this.$data.questions[i].input
          }
          this.$store.state.errorBook.errorRed.push(err)
          //console.log(err)
        }
      }
    },
    tableRowClassName ({ row, rowIndex }) {
      //console.log('row' + row)
      //console.log(this.$data.questions[rowIndex])
      if (this.$store.state.praStart.start && this.$data.questions[rowIndex].right == 0) {
        return 'warning-row';
      }
    }
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    store.commit('Show')
    store.commit('EndPratice')
    next()
  },
  created () {
    var postData = {
      pracType: this.$route.query.pracType,
      proNum: this.$route.query.proNum
    }
    this.$data.proNum = postData.proNum
    console.log(this.$data.proNum)

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
    if (this.$data.timer > 0)
      clearInterval(this.$data.timer)
  }
}
</script>

<style>
#question .inputAns {
  box-shadow: 0 2px 1px 0;
  width: 150px;
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

#question .grade {
  top: 40px;
}

#question .main {
  font-size: large;
  position: relative;
}

#question .ans {
  float: right;
}

#question .el-table .warning-row {
  background: oldlace;
}
</style>