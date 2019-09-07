<template>
    <div class="cart-list">
            <cart-list-item
                v-for='(item,index) in cartList'
                :key="index" 
                :product="item"/>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartListItem from 'views/cart/childComps/CartListItem'
export default {
    name: 'CartList',
    components: {
        CartListItem,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["cartList"]),
    },
}
</script>
<style lang="scss" scoped>

</style>
