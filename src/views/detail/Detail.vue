<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="detailNav"/>

      <better-scroll class="content" ref="scroll"
        :probeType='3' @scroll="contentScroll">
            <!-- 标签属性不区分大小写，传入值时最好将驼峰写法的大写转为小写以-进行分割以正确传值 -->
         <!-- <div>{{this.$store.state.cartList}}</div> -->
        <detail-swiper :top-images='topImages'/>
        <detail-base-info :goods='goods'/>
        <detail-shop-info :shop='shop' />
        <detail-goods-info :detail-info='detailInfo' @imageLoad="imageLoad"/>
        <detail-param-info ref="param" :params='params'/>
        <detail-comment-info ref="comment" :comments='comments'/>
        <goods-list ref="recommend" :goods='recommends'/>
        </better-scroll>
        <back-top @click.native="BackTop" v-show="isShowBackTop"/>
<!--      <toast :message="message" :show="show"></toast>-->
        <detail-bottom-bar @addCart='addToCart' />
    </div>
</template>
<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import DetailBaseInfo from 'views/detail/childComps/DetailBaseInfo'
import DetailShopInfo from 'views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/childComps/DetailGoodsInfo'
import DetailParamInfo from 'views/detail/childComps/DetailParamInfo'
import DetailCommentInfo from 'views/detail/childComps/DetailCommentInfo'
import DetailBottomBar from 'views/detail/childComps/DetailBottomBar'

import BetterScroll from 'components/common/better-scroll/BetterScroll'
import GoodsList from 'components/content/goods/GoodsList'



import { getDetail,Goods,Shop,GoodsParam,getRecommend } from 'network/detail'
import { debounce } from 'common/utils';
import { itemListenerMixin, backTopMixin }  from 'common/mixin'
// import { mapActions } from 'vuex'
// import { ADD_COUNTET, ADD_TO_CART } from 'store/mutations-types'

export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,

        BetterScroll,
      GoodsList
        // Toast,


    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            params: {},
            comments: {},
            recommends: [],
            themeTopYs: [],
            getThemeTopYs: null,
            currentIndex: 0,
            count: 0,
            // message: '',
            // show: false
        }
    },
    created() {
        //1.保存传入的iid
        this.iid = this.$route.params.iid;
        //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
            console.log(res);
            //1.获取数据
            const data = res.result;
            //2.获取顶部的图片轮播数据
            this.topImages = data.itemInfo.topImages;
            //3.获取商品信息
            this.goods = new  Goods(data.itemInfo, data.columns, data.shopInfo.services);
            //4.获取商家信息
            this.shop = new  Shop(data.shopInfo);
            //5.获取商品详细信息
            this.detailInfo =  data.detailInfo;
            //6.获取参数信息
            this.params = new GoodsParam(data.itemParams.info, data.itemParams.rule);
            //7.获取评论信息
            if(data.rate.cRate !== 0) {//如果评论不为空
                this.comments = data.rate.list[0]//取一条展示
            }
        })
      //3.获取推荐数据
      this.getRecommend();

        //4.给getThemeTopY赋值（对给getThemeTopY赋值的操作进行防抖）
        this.getThemeTopYs =  debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        },100);
        console.log(Number.MAX_VALUE)
        
    },
    mounted() {

    },
    destroyed() {
        //因为detail页面没有使用keep-alive做保存，所以不使用deactivated而是使用destoryed进行取消
        //取消全局事件的监听
        this.$bus.$off('itemImgLoad', this.itemImgListenr)
    },
  methods: {
    // ...mapActions(["addCarts"]),

    getRecommend() {
      getRecommend().then(res => {
        console.log(res);
        this.recommends = res.data.list;
        this.recommends.id = res.data.list.item_id;

      })
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopYs()


    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position) {
      //1.获取y值
      const positionY = -position.y;
      //2.positionY和主题中值进行对比
      let length = this.themeTopYs.length;
      // for(let i = 0; i < length; i++) {
      ////因为index为0-3，递增的话无法递增到0，所以分开判断
      //     if (this.currentIndex !== i && ((i< length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) ||
      //     (i === length - 1 && positionY >= this.themeTopYs[i]))) {
      //       this.currentIndex = i;
      //       console.log(this.currentIndex);
      //       this.$refs.detailNav.currentIndex = this.currentIndex
      //     }
      // }
      //在数组中增加值Number.MAX_VALUE,以便判断条件的优化 空间换时间  因为新增的值只是为了优化条件语句没有实际意义，所以不进行遍历，i < length - 1
      for(let i = 0; i < length-1; i++) {
        if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
      //3.是否显示回到顶部
      this.listenShowBackTop(position)
    },

    addToCart() {
      this.count = 1;
      //1.拼接出一个要加入到购物车的对象
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = this.count;
      product.selected = true;
      console.log(product);
      // this.$store.commit('addCarts',product)//mutations中函数使用commit
      // this.$store.dispatch('addCarts',product).then(res => {console.log(res);});//actions中函数使用dispatch
      // this.addCarts(product).then(res => {//可将actions映射到组件中，直接使用
      //   console.log(res);
      //   this.$toast.show(res, 1500)
      // });
      this.$store.commit('addCarts', product);
        // .then(res => {
        this.$toast.show('商品已添加入购物车', 1500)
      // })

    },
  }
}
</script>
<style lang="scss" scoped>
.detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    /*遮挡tabbar*/
    height: 100vh;
    /*给better-scroll的父组件高度*/
}
.detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.content {
    height: calc(100% - 44px - 49px);//给better-scroll高度
    overflow: hidden;
}
ul {
    z-index: 999;
}
</style>
