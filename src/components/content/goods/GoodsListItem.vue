<template>
    <div id="goods-item" @click='itemClick'>
        
        <img v-lazy="showImage" alt="" @load="imageLoad">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p> 
            <span class="goods-price">{{goodsItem.price}}</span> 
            <span class="goods-collect">{{goodsItem.cfav}}</span>        
        </div>
    </div>
</template>
<script>
export default {
    name: 'goodslistItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
         
        }
    },
    computed: {
        showImage() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods: {
        imageLoad() {
            this.$bus.$emit('itemImageLoad')//事件总线发射事件
        },
        itemClick() {
            this.$router.push('/detail/' + this.goodsItem.iid)
        // || this.$router.push('/detail/' + this.goodsItem.shop_id)
        }
    }
  
}
</script>
<style scoped>
#goods-item {
    position: relative;
    width: 50%;
    padding: 6px 4px 40px;
}
#goods-item img {
    width: 100%;  
    border-radius: 3%;
    /* box-shadow: 0 0 1px 1px; */
}
.goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    padding: 2px;
    font-size: 12px;
}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-price {
    color: var(--color-high-text);
    margin-right: 30px;
}
.goods-collect {
    position: relative;
}
.goods-collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
