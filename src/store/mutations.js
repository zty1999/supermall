// import { ADD_COUNT, ADD_TO_CART } from './mutations-types'

export default {
    // [ADD_COUNT](state,payload) {
    //
    //     payload.count++
    // },
    // [ADD_TO_CART](state,payload) {
    //   payload.checked = true;//商品添加就被选中
    //   state.cartList.push(payload);
    //
    // },
  addCarts(state,product) {

    let flag = false
    state.cartList.some(item => {
      if(item.iid === product.iid) {//找到已有的对应商品就添加数量
        item.count += parseInt(product.count)
        flag = true
        return true
      }
    })
    if(!flag) {//没找到添加商品对象
      product.checked = true
      state.cartList.push(product)
    }
    localStorage.setItem('cartList', JSON.stringify(state.cartList));

  }
}


