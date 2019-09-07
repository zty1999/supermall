<template>
  <div class="side-bar">
    <div class="side-bar-item"
      v-for="(item,index) in titles" :key="index"
      @click="titleClick(index)"
      :class="{active: index === currentIndex}">
      {{item.title}}
    </div>

  </div>
</template>

<script>
    export default {
      name: "SideBar",
      components: {
      },
      props: {
        titles:{
          type: Array,
          default() {
            return []
          }
        }
      },
      data() {
        return {
          currentIndex: 0
        }
      },
      methods: {
        titleClick(index) {
          this.currentIndex = index;
          this.$emit('titleClick', index)
        }
      }
    }
</script>

<style lang="scss" scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  .side-bar-item {
    width: 120px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    text-align: center;
    background: #eee;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    /*border-bottom: 1px solid #eee;*/
    /*border-right: 1px solid #eee;*/
  }
  .active {
    color: var(--color-high-text);
    border-left: 6px solid var(--color-tint);
    background: var(--color-background);
  }
}
</style>
