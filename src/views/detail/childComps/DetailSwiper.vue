<template>
    <swiper class="detail-swiper">
        <swiper-item class="swiper-item" v-for="item in topImages" :key="item.index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>

    
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
        
    },
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden;
    
}
.swiper-item {
    height: 100%;
}
</style>