<template>
    <div class="cart">
        <!-- 导航 -->
        <nav-bar class="cart-nav"><div slot="center">购物街({{cartLength}})</div></nav-bar>
        <!-- 商品列表 -->
      <better-scroll class="content" ref="scroll">
        <cart-list/>
      </better-scroll>
        <!-- 底部汇总 -->
      <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from 'views/cart/childComps/CartList'
import CartBottomBar from 'views/cart/childComps/CartBottomBar'

import BetterScroll from "components/common/better-scroll/BetterScroll"

import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      BetterScroll,
      CartBottomBar,

    },
    data() {
        return {
            
        }
    },
  created() {
    let cartList = JSON.parse(localStorage.getItem('cartList') || '[]')

  },
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters(["getAllCount", "cartLength", "cartList"])
        
    },

}
</script>
<style lang="scss" scoped>
.cart {
    height: 100vh;
    .cart-nav {
        position: relative;
        
        background: var(--color-tint);
        color: #fff;
    } 
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;

}
</style>
