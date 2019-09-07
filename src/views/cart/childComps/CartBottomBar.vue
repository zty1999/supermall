<template>
    <div class="bottom-bar">
      <div class="checked-wrapper">
        <check-button
          :is-checked="isSelectAll"
          class="checked-button"
          @click.native="checkClick"/>
        <span>全选</span>
      </div>
      <div class="account-price">合计：<span class="price">{{totalPrice}}</span></div>
      <div class="calculate" @click="calcClick">
        去计算：{{getAllCount}}
      </div>
    </div>
</template>

<script>
  import checkButton from './checkButton'
  import { mapGetters } from 'vuex'

  export default {
        name: "CartBottomBar",
      components: {
        checkButton,
      },
      computed: {
        ...mapGetters(["cartList","getAllCount",]),
          totalPrice() {
            return "￥" + this.cartList.filter(item => {
              return item.checked;
            }).reduce((preValue, item) => {
              return preValue + item.price * item.count
            }, 0).toFixed(2);
          },
        cartLength() {
            return this.cartList.filter(item => {
              return  item.checked
            }).length
        },
        isSelectAll() {
          if (this.cartList.length === 0) return false;//长度为0不选中
          //filter方法   报错
          // return !(this.$store.state.filter(item => !item.checked).length);
          //find方法
          // return !this.cartList.find(item => !item.checked)//cartList中找到未选中的就不选中
          //普通遍历
          for (let item of this.cartList) {
            if(!item.checked) {
              return false
            }
          }
          return true
        },

      },
    methods: {
      checkClick () {
        if(this.isSelectAll) {//全部选中
          this.cartList.forEach(item => item.checked = false)
        }else{//部分或全部不选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick() {
        if (!this.isSelectAll) {
          this.$toast.show('请选择购买的商品', 2000)
        }else {
          // this.$router.Location('/accounts')
        }
      }


    }
    }
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;

  background-color: #eee;
  .checked-wrapper {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
    height: 30px;
    .checked-button {
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin-right: 5px;
      /*vertical-align: middle;*/
    }
  }
  .account-price {
    flex: 1;
    margin-left: 30px;
  }
  .price {
    color: var(--color-high-text);
    font-size: 16px;
  }
  .calculate {
    width: 90px;
    text-align: center;
    color: #fff;
    background-color: var(--color-tint);
  }
}


</style>
