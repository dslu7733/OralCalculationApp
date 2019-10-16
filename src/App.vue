<template>
  <div id="app">
    <router-view />
    <main-tab-bar v-show="show" />
  </div>
</template>


<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'

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
  }
}
</script>


<style>
@import "assets/css/base.css";
</style>
