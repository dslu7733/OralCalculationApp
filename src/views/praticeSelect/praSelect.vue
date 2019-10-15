<template>
  <div id='pra_select'>
    <el-page-header @back="goBack"
                    class="header">
    </el-page-header>

    <el-table :data="praticeData"
              class="main"
              @row-click="getPractice"
              style="width: 100%">
      <el-table-column prop="pratice"
                       label="练习范围"
                       width="360%">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'praticeSelect',
  data () {
    return {
      praticeData: []
    }
  },
  methods: {
    goBack () {

    },
    getPractice (row, column, event) {
      //console.log(row.pratice)
      this.$router.push({path:'/pratice', query:{pratice:row.pratice}})
    }
  },
  created () {
    let ranges = this.$route.query.parRange.slice()
    //console.log(ranges)
    for (var opt in ranges) {
      let pratice = { 'pratice': ranges[opt] }
      this.$data.praticeData.push(pratice)
    }
    //console.log(this.$data.praticeData)
  }
}
</script>

<style>
#pra_select {
  background-color: #f5f6f7;
  position: relative;
}

#pra_select .header {
  position: relative;
  margin: 1%, 2%, 100px, 2%;
}

#pra_select .main {
  background-color: whitesmoke;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  position: relative;
}
</style>