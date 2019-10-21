<template>

  <div id='pratice'
       class="wrapper">
    <el-container>

      <el-header height='30'>
        <nav-bar>
          <div slot="center">每日一练</div>
        </nav-bar>
      </el-header>

      <el-main>
        <div class="main">
          <p class="title">口算练习</p>

          <pratice-swiper :banners='banners'
                          class="pratice-swiper"></pratice-swiper>

          <div class="select-grade">
            <select-grade ref="selectgrade"
                          :grade="grade" />
          </div>

          <el-row class='el-row1'>
            <el-col :span="9">
              <div class="grid-content bg-purple-dark">练习范围</div>
            </el-col>

            <el-col :span="15">
              <div class="grid-content bg-purple-dark">
                <el-button type="primary"
                           plain
                           @click.native="updatePraRange">{{pratice}}</el-button>
              </div>
            </el-col>
          </el-row>

          <el-row class='el-row2'>
            <el-col :span="9">
              <div class="grid-content bg-purple-dark">题目数量</div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">

                <el-select v-model="problemNum"
                           filterable
                           :placeholder="String(problemNum)">
                  <el-option v-for="item in problemNumOpt"
                             :key="item"
                             :value="item">
                  </el-option>
                </el-select>

              </div>
            </el-col>
          </el-row>

          <div class='el-row3'>
            <el-button type="success"
                       @click.native="start"
                       round>开始练习</el-button>
          </div>

        </div>
      </el-main>

    </el-container>
  </div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import PraticeSwiper from 'views/pratice/childComps/praticeSwiper'
import SelectGrade from 'components/content/selectGrade'
import store from '../../store/index'    //直接引入

export default {
  name: 'pratice',
  data () {
    return {
      problemNumOpt: [10, 20, 30, 60, 100],
      problemNum: 30,
      grade: [],     //当前年级
      praRange: [],  //当前可选题型

      banners: [{
        id: 1,
        imge: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115757459,393397954&fm=26&gp=0.jpg'
      },
      {
        id: 2,
        imge: 'https://i04piccdn.sogoucdn.com/c65afff59d213f75'
      },
      {
        id: 3,
        imge: 'https://i03piccdn.sogoucdn.com/c1901134c10fe2a9'
      }
      ]
    }
  },
  beforeRouteLeave: (to, from, next) => {
    //console.log(to.path)
    if (to.path === '/question') {
      store.commit('Close')
    }
    next()
  },
  components: {
    NavBar,
    PraticeSwiper,
    SelectGrade
  },
  methods: {
    updatePraRange () {
      //console.log('update' + this.$refs.selectgrade.value)
      this.$store.dispatch('getPraRange', { grade: this.$refs.selectgrade.value })

      //2 bug 
      setTimeout(() => {
        //console.log(this.$store.state.praRange.praRange)
        if (this.$store.state.praRange.praRange != null) {
          //console.log(this.$store.state.praRange.grade)
          //console.log(this.$store.state.praRange.praRange)
          this.$data.grade = this.$store.state.praRange.grade
          this.$data.praRange = this.$store.state.praRange.praRange
          this.$router.push({ path: '/praSelect', query: { parRange: this.$data.praRange } })
        }
      }, 500);
    },

    start () {

      if (this.$store.state.praRange.pratice == '') {
        this.$message('请先选择题目。')
      } else {
        this.$router.push({ path: '/question', query: { pracType: this.$store.state.praRange.pratice, proNum: this.$data.problemNum } })
      }
    }
  },
  computed: {
    pratice () {
      return this.$store.state.praRange.pratice || '选择题目'
    }
  },
  created () {
    this.$data.grade = this.$store.state.praRange.grade

    if (this.$route.query.pratice != null) {
      //console.log(this.$route.query.pratice)
      this.$store.state.praRange.pratice = this.$route.query.pratice  //取得选择的题型
    }

    if (this.$store.state.user.errorRecord === "")
      this.$store.state.user.errorRecord = []
  }
}
</script>

<style>
#pratice {
  background-color: #f5f6f7;
  height: 100vh;
  position: relative;
}

#pratice .main {
  background-color: whitesmoke;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  height: 75vh;
  weight: 70vh;
  position: relative;
}

#pratice .main .title {
  top: 10px;
  left: 10px;
  position: relative;
}

#pratice .grid-content {
  font-size: small;
  top: 30px;
  left: 10px;
  position: relative;
}

#pratice .pratice-swiper {
  top: 7%;
  position: relative;
}

#pratice .select-grade {
  top: 13%;
  position: relative;
}

#pratice .el-row1 {
  top: 14%;
  position: relative;
}

#pratice .el-row2 {
  top: 20%;
  position: relative;
}

#pratice .el-row3 {
  top: 30%;
  position: relative;
  text-align: center;
}
</style>
