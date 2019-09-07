<template>
    <div id="goods">
        <goods-list-item v-for='item in goods' :key='item.url' :goods-item='item'/>
        
    </div>
</template>
<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
    name: 'goodslist',
    components: {
       GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
         
        }
    },
  
}
</script>
<style scoped>
#goods {
    display: flex;
    flex-wrap: wrap;
}

</style>