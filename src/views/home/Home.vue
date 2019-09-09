<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control class="tab-control"
            :titles="['流行','新款', '精选']" 
            @tabClick='tabClick' v-show='isTabFixed'
            ref='tabControl1'>
        </tab-control>
        <better-scroll class="content" ref="scroll" 
        :probe-type='3' 
        @scroll="contentScroll" 
        :pull-up-load='true'
        @pullingUp='loadMore'
        >
        
            <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad'></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view ></feature-view>

            <tab-control 
            :titles="['流行','新款', '精选']" 
            @tabClick='tabClick'
            ref='tabControl2'>
            </tab-control>

            <goods-list :goods="showGoods"></goods-list>
        </better-scroll>
        <back-top @click.native="BackTop" v-show="isShowBackTop"/>
       
    </div>
</template>
<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BetterScroll from 'components/common/better-scroll/BetterScroll'


import { getHomeMultidata, getHomeGoods } from 'network/home.js'
// import { setTimeout } from 'timers';
import { debounce } from 'common/utils';
import { itemListenerMixin, backTopMixin }  from 'common/mixin'


export default {
    name: 'home',
    components: {
        HomeSwiper,
        RecommendView,
        FeatureView,

        NavBar,
        TabControl,
        GoodsList,
        BetterScroll,
        
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
        return {
            result: null,
            banners: [],
            recommends: [],
            goods: {
                'pop' : {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []},
            }, 
            currentType: 'pop',
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0,
            
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    destroyed() {
      console.log('home destroyed');
    },
    activated() {
        console.log('home  activated');
        this.$refs.scroll.scrollTo(0,this.saveY,0);
        this.$refs.scroll.refresh()
    },
    deactivated() {
        //1.保存Y值  离开时记录状态和位置 better-scroll新版本无效，需回退版本1.13.2
        console.log(this.saveY);
        this.saveY = this.$refs.scroll.getScrollY();
        //2.取消全局事件的监听
        this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    created() {
        //1.请求多个数据
        this.getHomeMultidata();
        //2.请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
      },
    mounted() {
    },
    methods: {
        /**
         * 事件监听相关的方法
         */
        tabClick(index) {
            switch(index) {
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1: 
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
                    break
            }
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index
            //使两个tabcontrol最新点击的index保持一致
        },
        
        contentScroll(position) {//监听到的坐标值
            //1.判断BackTop是否显示
            this.listenShowBackTop(position);
            //2.决定tabControl是否吸顶(v-show)
            this.isTabFixed = (-position.y)>this.tabOffsetTop
        },
        loadMore() {
            console.log('加载更多的方法');
            this.getHomeGoods(this.currentType);
        },
        swiperImageLoad() {
            //2.获取tabControl的offsetTop
            //所有组件都有一个属性$el,用于获取组件中的元素
            // console.log(this.$refs.tabControl2.$el.offsetTop);
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },
        
        /**
         * 网络请求相关的方法
         */
        
        getHomeMultidata() {
            getHomeMultidata().then(res => {
            console.log(res);
            //由于垃圾回收机制，函数调用完毕请求的数据会被回收，在data中设置一个变量指向请求的数据使请求的数据保存下来不被回收
            this.result = res;
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            })
        },
        
        
        getHomeGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list);
                //...是解析语法，把数组的内容一个个抽出来push进去
                this.goods[type].page +=1;
                this.$refs.scroll.finishPullUp();
                //调用scroll的finishPullUp（），结束这一次的上拉加载更多，才能继续上拉加载下一页
        })
        }
        
    }
}
</script>
<style scoped>
#home {
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
}
    .home-nav {
        background: var(--color-tint);
        color: #fff;
        /* 为了使在使用原生滚动时导航不跟随滚动 */
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99; */
    }
    .tab-control {
        /* position: sticky;
        top: 44px; */
        /* 原生  吸顶效果  better-scroll下失效
        当高度未达到44px时默认为position：static ,当高度达到时变更为pisition：fixed*/
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    /* .content {
        height: calc(100% - 49px); */
        /* 49是底下tab栏的高度，上面nav已经设置了padding-top，（100% - 49px）是中间的高度 */
        /* overflow: hidden; */
        /* margin-top: 44px; */
    /* } */
    .content {
        position: absolute;
        overflow: hidden;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    
</style>
