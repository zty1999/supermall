<template>
  <div class="profile">
    <profile-nav-bar></profile-nav-bar>
    <register></register>
    <profile-info></profile-info>
  </div>

</template>
<script>
  import ProfileNavBar from './childComps/ProfileNavBar'
  import Register from './childComps/Register'
  import ProfileInfo from './childComps/ProfileInfo'

  export default {
    name: 'Profile',
    components: {
      ProfileNavBar,
      Register,
      ProfileInfo,
    }

  }
</script>
