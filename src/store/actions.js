// import { ADD_COUNT, ADD_TO_CART } from './mutations-types'
//
// export default {
//     addCarts(context,payload) {
//       return new Promise((resolve, reject) => {
//         // 查找之前数组中是否有该商品
//         let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
//         //判断oldProduct
//         if (oldProduct) {//如果oldproduct有值，数量加1
//           // oldProduct.count += 1;
//           context.commit(ADD_COUNT, oldProduct);
//           resolve('当前商品数量+1')
//         } else {//添加一个新的商品
//           payload.count = 1;
//           // context.state.cartList.push(payload)
//           context.commit(ADD_TO_CART, payload);
//           resolve('添加新的商品');
//         }
//         // localStorage.setItem('cartList', JSON.stringify(state.cartList))
//       });



//     }
// }
