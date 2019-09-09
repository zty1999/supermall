<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 详情页状态不保持  exclude="与该组件name相同"，否则无效 -->
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  },
  mounted() {
    /**
     * 解决 css 引入图片在 github pages 无法获取的问题
     */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  }

}

</script>

<style>
@import 'assets/css/base.css';

</style>
