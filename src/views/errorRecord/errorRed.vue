<template>
  <div id='errorRecord'>
    <div class="title">
      <el-page-header @back="goBack"
                      class="header"
                      content='错题本'>
      </el-page-header>
    </div>

    <el-table :data="questions"
              height="650"
              style="width: 380%">


      <el-table-column prop="prob"
                       label='算式'
                       width="130%">
      </el-table-column>
      <el-table-column prop="input"
                       label='错误'
                       width="130%">
      </el-table-column>
            <el-table-column prop="ans"
                       label='正确结果'
                       width="130%">
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
import store from '../../store/index'

export default {
  name: 'errorRecord',
  data () {
    return {
      questions: []
    }
  },
  methods: {
    goBack () {
      this.$router.push('/profile')
    }

  },
  created () {
    console.log(store.state.errorBook.errorRed)
    this.$data.questions = store.state.errorBook.errorRed
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    store.commit('Show')
    next()
  }
}
</script>

<style>
#errorRecord .title {
  text-align: center;
}
</style>