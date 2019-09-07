<template>
<div class="shop-info">
    <div class="shop-top">
        <img :src="shop.logo" alt="">
        <span class="shop-name">{{shop.name}}</span>
    </div>
    
    <div class="shop-middle">
        <div class="shop-middle-left">
            <div class="sells-info">
                <div class="sells-count">{{shop.sells | sellCountFilter}} </div> 
                <div class="sells-text">总销量</div> 
            </div>
            <div class="goods-info">
                <div class="goods-count">{{shop.shopGoods}}</div> 
                <div class="goods-text">全部宝贝</div>
            </div>
        </div>
        <div class="shop-middle-right" >
            <table> 
                <tr v-for="(item,index) in shop.scores" :key="index">
                    <td>{{item.name}} </td>
                    <td class="score" :class="{'score-better': item.isBetter === true}">{{item.score}} </td>
                    <td class="better" :class="{'better-more': item.isBetter === true}">{{item.isBetter ? "高" : "低"}} </td>
                </tr> 
            </table>
        </div>  
    </div>
    <div class="shop-bottom">
      <a :href="shop.shopUrl">
        <div class="enter-shop">进店逛逛</div>          
      </a>
    </div>
    
</div>
</template>
<script>
export default {
    name: 'DetailShop',
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    },
    
}
</script>
<style lang='scss' scoped>
.shop-top {
    padding:  30px 20px;
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,.1);
    }

    .shop-name {
        padding: 0 20px;
    }
}

.shop-middle {
    display: flex;
    padding: 10px 0;
    font-size: 14px;

    .shop-middle-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        color: #333;
        border-right: 1px solid rgba(0,0,0,.1);

        .sells-info {
            // flex: 1;
            .sells-count {
                font-size: 18px;
            }
            .sells-text {
                margin-top: 10px;
                font-size: 12px;
            }
        }

        .goods-info {
            // flex: 1;
            .goods-count {
                font-size: 18px;
            }
            .goods-text {
                margin-top: 10px;
                font-size: 12px;
            }
        }
    }
    .shop-middle-right {
        display: flex;
        justify-content: center;
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #333;
        tr {
            display: block;
            margin : 5px 0;
        }
        .score {
            width: 35px;
            padding: 0 3px;
            color: #5ea732;
        }
        .score-better {
            color: #f13e3a;

        }
        .better {
            color: #fff;
            background-color: #5ea732;

        }
        .better-more {
            color: #fff;
            background-color: #f13e3a;

        }
    }

}


.shop-bottom {
    text-align: center;
    margin-top: 10px;

    .enter-shop {
        display: inline-block;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
    }

}

  
</style>