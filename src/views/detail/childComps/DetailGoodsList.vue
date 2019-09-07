<template>
    <div id="goods">
        <detail-goods-list-item v-for='item in list' :key='item.url' :goods-item='item'/>
        
    </div>
</template>
<script>
import DetailGoodsListItem from './DetailGoodsListItem'

export default {
    name: 'DetailGoodsList',
    components: {
      DetailGoodsListItem
    },
    props: {
        list: {
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
  methods: {

  }
}
</script>
<style scoped>
#goods {
    display: flex;
    flex-wrap: wrap;
}

</style>
