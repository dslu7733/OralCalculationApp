const tabBarCol = {
  state: {
    show: true 
  },
  mutations: {
    Show(state){
      state.show = true
    }, 
    Close(state){
      state.show = false
    }
  }
}

export default tabBarCol