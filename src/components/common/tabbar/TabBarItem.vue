<template>
<div class="tab-bar-item" @click='itemClick'>
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

</div>
    
    
</template>
<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,//类型字符串
            default: 'red'//默认为红色
        }
    },
    data() {
        return {
            
            // isActive: false
        }
    },
    computed: {
         isActive() {
            return this.$route.path.indexOf(this.path) !== -1
            //接受到的数据中找不到当前路径就 == -1，找得到当前路径就！== -1
        },
        activeStyle() {
            return this.isActive ? {color:this.activeColor}:{}
        }
    },
    // watch: {
    //     $router(to,from) {
    //         this.isActive = to.path.indexOf(this.path)=-1? true:false
    //     }
        
    // },
    methods: {
        itemClick() {
            this.$router.replace(this.path).catch(err => {})//连点tabbar子组件报错加上.catch(err => {})解决
        },
       
    }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  
  height: 49px;
  /* tabbar高度一般都为49px     */
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
}
</style>
