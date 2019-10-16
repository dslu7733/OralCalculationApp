<template>
  <div id="profile">

    <el-header height='30px'>
      <img src="~assets/img/profile/bg-img.jpeg"
           class='bg-img' />
    </el-header>

    <el-main class='el-main'>

      <div class="options">
        <el-row class='el-row1'>
          <el-col :span="12">
            <img src="~assets/img/profile/error_book.svg"
                 class="error_book" />
          </el-col>
          <el-col :span="12">
            <el-button type="warning"
                       round
                       plain
                       @click="showError">错题本</el-button>
          </el-col>
        </el-row>

        <el-row class='el-row2'>
          <el-col :span="12">
            <img src="~assets/img/profile/history.svg"
                 class="history" />
          </el-col>
          <el-col :span="12"
                  style="text-align: left">
            <el-button type="warning"
                       round
                       plain>练习历史</el-button>
          </el-col>
        </el-row>

        <el-row class='el-row3'>
          <el-col :span="12">
            <img src="~assets/img/profile/user.svg"
                 class="user" />
          </el-col>
          <el-col :span="12"
                  style="text-align: left">
            <router-link to="user">
              <el-button type="warning"
                         round
                         plain>用户设置</el-button>
            </router-link>
          </el-col>
        </el-row>
      </div>

    </el-main>

  </div>
</template>

<script>
import store from '../../store/index'

export default {
  name: 'Profile',
  methods: {
    showError () {
      this.$router.push({ path: '/errorRecord' })
    }
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    if (to.path === '/errorRecord') {
      store.commit('Close')
    }
    next()
  }
}
</script>

<style>
#profile {
  background-color: #f5f6f7;
  height: 100vh;
  position: relative;
}

#profile .bg-img {
  position: absolute;
  top: -5%;
  left: 0;
  right: 0;
  max-width: 100%;
}

#profile .el-main {
  background-color: lightyellow;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  height: 60vh;
  top: 20%;
  margin: 9%;
  position: relative;
  text-align: center;
}

#profile .el-row1 {
  top: 15%;
  left: 30%;
  position: absolute;
}

#profile .el-row2 {
  top: 35%;
  left: 27%;
  position: absolute;
}

#profile .el-row3 {
  top: 55%;
  left: 27%;
  position: absolute;
}

#profile .error_book,
.history,
.user {
  height: 40px;
  max-width: 100%;
}
</style>
