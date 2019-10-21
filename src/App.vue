<template>
  <div id="app">
    <router-view />
    <main-tab-bar v-show="show" />
  </div>
</template>


<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.use(VueAxios, Axios)

export default {
  name: 'app',
  data () {
    return {
      //show: true
    }
  },
  components: {
    MainTabBar
  },
  computed: {
    show () {
      return this.$store.state.tabBarCol.show
    }
  },
  created() {
  }
}
</script>


<style>
@import "assets/css/base.css";
</style>
