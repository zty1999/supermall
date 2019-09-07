import Vue from 'vue'
import vuex from 'vuex'
//addCarts方法重构前代码

//1.安装插件
Vue.use(vuex)
//2.创建store对象
const  store = new vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        // mutatuins唯一的目的就是修改state中状态
        // mutations中的每个方法尽可能完成的事情比较单一
        // 因为addCart()的内容涉及到判断，所以放入actions中处理
        addCarts(state,payload) {
            //方法1  for循环  查找之前数组中是否有该商品
            // let oldProduct = null;
            // for(let item of state.cartList) {//
            //     if(item.iid === payload.iid) {
            //         oldProduct = item
            //     }
            // }
            //方法2  find函数  查找之前数组中是否有该商品
            let oldProduct = state.cartList.find(item =>  item.iid === payload.iid)


            //判断oldProduct
            if(oldProduct) {//如果oldproduct有值
                oldProduct.count += 1   
            }else {
                payload.count = 1
                state.cartList.push(payload)
            }
        }
    },
    
})
//3.挂载在vue实例上
export default store 