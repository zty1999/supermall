<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy" >立即购买</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailBottomBar',
    data() {
        return {

        }
    },
    methods: {
        addToCart() {
            this.$emit("addCart");
        }
    }
}
</script>
<style lang="scss" scoped>
.bottom-bar {
    position: relative;
    height: 49px;
    bottom: 0;
    z-index: 999;
    
    display: flex;
    text-align: center;

    .bar-item  {
        flex: 1;
        display: flex;
        div {
            flex: 1;
        }
    }
    .bar-left {
        font: 13px;
        background-color: #fff;
        .icon {
            display: block;
            width: 22px;
            height: 22px;
            margin: 6px auto 3px;
            background: url('~assets/img/detail/detail_bottom.png') 0 0/100% ;
            
        }
        .service {
            background-position: 0 -54px;
        }
        .shop {
            background-position: 0 -98px;
        }
    }
    .bar-right {
        font: 15px;
        color: #fff;
        line-height: 49px;
        .cart {
            color: #333;
            background-color: #ffe817;
            
        }
        .buy {
            background-color: #f69;
        }
    }
    .sport-ball {
        position: absolute;
        left: 225px;
        bottom: 20px;
    }
}
</style>
