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
  }
}
</script>

<style>
@import 'assets/css/base.css';

</style>
