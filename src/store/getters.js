export default {//getters相当于计算属性也相当于filters
  getAllCount(state) {
    let c = 0;
    state.cartList.forEach(item => {
      c +=item.count
    })
    return c
  },
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  }
}
  // getGoodsCount(state) {
  //   let o = {}
  //   state.cartList.forEach(item => {
  //     o[item.id] = item.count
  //   })
  //   return o
  // },
  // getGoodsSelected(state) {
  //   var o = {}
  //   state.cartList.forEach(item => {
  //     o[item.id] = item .selected
  //   })
  //   return o
  // },
