<template>
  <div id="user">
    <el-header height='30'>
      <nav-bar>
        <div slot="center">个人信息</div>
      </nav-bar>
    </el-header>

    <el-main>
      <el-row class="el-row1">
        <el-col>
          昵称：
        </el-col>
        <el-col>
          <el-input placeholder="请输入昵称"
                    v-model="name"
                    style="width:200px">
          </el-input>
        </el-col>
      </el-row>

      <el-row class="el-row2">
        <el-col>
          年级：
        </el-col>
        <el-col>
          <select-grade ref="selectgrade"
                        :grade="usergrade" />
        </el-col>
      </el-row>

      <el-row class='el-row3'>
        <router-link to="profile">
          <el-button type="success"
                     plain
                     round
                     @click="addUser">确定</el-button>
        </router-link>
      </el-row>
    </el-main>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import SelectGrade from 'components/content/selectGrade'

export default {
  name: 'user',
  data () {
    return {
      name: this.$store.state.user.name || ''
    }
  },
  computed: {
    usergrade () {
      return this.$store.state.user.grade
    }
  },
  methods: {
    addUser () {
      if (this.$data.name && this.$refs.selectgrade.value) {
        let payload = {
          name: this.$data.name,
          grade: this.$refs.selectgrade.value
        }
        //console.log(this.$data.name + this.$refs.selectgrade.value)
        this.$store.commit('updateUser', payload)
      }
    }
  },
  components: {
    NavBar,
    SelectGrade
  }

}
</script>

<style>
#user .el-row1 {
  position: absolute;
  top: 13%;
  left: 10%;
}

#user .el-row2 {
  position: absolute;
  top: 28%;
  left: 10%;
}

#user .el-row3 {
  position: absolute;
  top: 45%;
  left: 11%;
}
</style>
