<template>
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "CategoryNav",
    components: {
      NavBar,

    },
    }
</script>

<style scoped>
.category-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>
