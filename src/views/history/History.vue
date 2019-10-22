<template>
  <div id='errorRecord'>
    <div class="title">
      <el-page-header @back="goBack"
                      class="header"
                      content='练习历史'>
      </el-page-header>
    </div>

    <el-table :data="history"
              height="650"
              style="width: 380%">

      <el-table-column prop="date"
                       label='日期'
                       width="120%">
      </el-table-column>
      <el-table-column prop="time"
                       label='用时'
                       width="50%">
      </el-table-column>
      <el-table-column prop="accuracy"
                       label='准确率'
                       width="80%">
      </el-table-column>

      <el-table-column prop="problem"
                       label='题目'
                       width="100%">
      </el-table-column>

      <!-- <el-table-column fixed="right"
                       label="操作"
                       width="60%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column> -->

    </el-table>

  </div>
</template>

<script>
import store from '../../store/index'

export default {
  name: 'history',
  data () {
    return {
      history: []
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
  },
  created () {
    //console.log(store.state.user.history)
    this.$data.history = store.state.user.history
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    if (to.path != '/history')
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