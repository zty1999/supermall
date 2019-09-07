<template>
    <div class="category">
      <category-nav class="category-nav"></category-nav>

      <better-scroll class="content">
<!--        <side-bar :titles="list" @titleClick="titleClick"></side-bar>-->
<!--        <category-sub-title></category-sub-title>-->
<!--        <goods-list :goods="showGoods"></goods-list>-->
      </better-scroll>
    </div>
</template>
<script>
  import  CategoryNav from './childComps/CategoryNav'
  // import  SideBar from './childComps/SideBar'
  // import  CategorySubTitle from './childComps/CategorySubTitle'
  import BetterScroll from 'components/common/better-scroll/BetterScroll'
  // import GoodsList from 'components/content/goods/GoodsList'

  import {getCategory,getPopGoods} from "../../network/category";
export default {
    name: 'Category',
  components: {
    CategoryNav,
    // SideBar,
    // CategorySubTitle,
    BetterScroll,
    // GoodsList
  },
    data() {
        return {
          list: [],

          scroll: null
        }
    },
    mounted() {

    },
  created() {
      this.getCategory();
      // this.getPopGoods();

  },
  computed: {

  },

    methods: {
      getCategory() {
        getCategory().then(res => {
          this.list = res.data.category.list;
          console.log(res)
        })
      },
    }
}
</script>
<style scoped>
.category {
  position: relative;
  height: 100vh;
  .category-nav {
    position: relative;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*height: calc(100% - 44px - 49px);*/
    overflow: hidden;
  }
}
</style>
