<template>
  <div id='errorRecord'>
    <div class="title">
      <el-page-header @back="goBack"
                      class="header"
                      content='错题本'>
      </el-page-header>
      题目数量&nbsp&nbsp{{proNum}}
    </div>

    <el-table :data="questions"
              height="650"
              style="width: 380%">

      <el-table-column prop="prob"
                       label='算式'
                       width="120%">
      </el-table-column>
      <el-table-column prop="input"
                       label='错误'
                       width="90%">
      </el-table-column>
      <el-table-column prop="ans"
                       label='正确结果'
                       width="100%">
      </el-table-column>

      <el-table-column fixed="right"
                       label="操作"
                       width="60%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"
                     type="text"
                     size="small">删除</el-button>
        </template>
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
    },
    handleClick (delProb) {
      store.state.user.num--
      var last_index = store.state.user.num

      var index = store.state.user.errorRecord[delProb.index].index
      store.state.user.errorRecord[delProb.index] =
        store.state.user.errorRecord[last_index]

      //console.log(index)
      store.state.user.errorRecord[index].index = index
      store.state.user.errorRecord.pop()
      //this.$router.push({ path: '/errorRecord' })

    }

  },
  computed: {
    proNum () {
      return store.state.user.num
    }
  },
  created () {
    console.log(store.state.user.errorRecord)
    this.$data.questions = store.state.user.errorRecord
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    if (to.path != '/errorRecord')
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