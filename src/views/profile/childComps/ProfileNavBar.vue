<template>
    <nav-bar class="profile-nav">
      <div  slot="center">我的档案</div>
    </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
        name: "ProfileNavBar",
    components: {
      NavBar

    }
    }
</script>

<style scoped>
.profile-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>
