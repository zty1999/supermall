<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot='center' class="title">
                <div class="title-item" 
                v-for="(item,index) in titles" :key="item.index"
                @click='titleClick(index)' 
                :class="{active: index === currentIndex}"
                >
                {{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'detailNavBar',
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index;
            this.$emit('titleClick', index)
        },
        backClick() {
            this.$router.back()
            //this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .title {
        display: flex;
    }
    .title-item {
        /* text-align: center; */
        flex: 1;
        font-size: 13px;

    }
    .back img {
        margin-top: 12px;

    }
    .active {
        color: red;
    }
</style>
