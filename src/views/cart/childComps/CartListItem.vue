<template>
    <div class="cart-list-item">
        <div class="item-selector">
<!--          <checkButton  @click.native="checkedChange" :is-checked="product.checked"></checkButton>-->
              <check-button  @click.native="checkedChange" :is-checked="product.checked" ></check-button>
        </div>
      <div class="item-img">
        <img :src="product.image" alt="商品图片">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="item-bottom">
          <div class="item-price left">￥{{product.price}}</div>
          <div class="item-count right">x{{product.count}}</div>
<!--          <car-number-box></car-number-box>-->
        </div>
      </div>

    </div>
</template>
<script>
import  checkButton from "./checkButton"
// import CarNumberBox from "./CarNumberBox";
export default {
    name: 'CartListItem',
    props: {
        product: {
            type: Object,
            default() {
                return {

                }
            }
        }
    },
  components: {
    // CarNumberBox,
    checkButton,
  },
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
      checkedChange() {
        this.product.checked = !this.product.checked;
        console.log('product.checked');

      }
  }
}
</script>
<style lang="scss" scoped>
.cart-list-item {
  display: flex;
  width: 100%;
  padding: 10px 5px;
  /*fonts-size: 0;*/
  border-bottom: 1px solid #ccc;

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center ;
    align-items: center;
  }
  .item-img {
    padding: 5px;
    img {
      display: block;
      width: 70px;
      height: 100px;
      border-radius: 5px;
    }
  }
  .item-info {
    position: relative;
    padding: 5px 3px;
    text-overflow: ellipsis ;
    overflow: hidden;
    white-space: nowrap;
    .item-title {
      @extend  .item-info;
      font-size: 16px;

    }
    .item-desc {
      @extend  .item-info;
      font-size: 12px;
      color: #666;
      margin-top: 5px;
    }
    .item-bottom {
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      font-size: 16px;
      .item-price {
        color: var(--color-tint);
      }
    }
  }




}

</style>
