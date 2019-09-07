<template>
    <div class="profile-info">
      <div class="info-item info-balance" >
        <div>0.00元</div>
        <div>我的余额</div>
      </div>
      <div class="info-item info-discounts">
        <div>0个</div>
        <div>我的优惠</div>
      </div>
      <div class="info-item info-integral">
        <div>0分</div>
        <div>我的积分</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileInfo"
    }
</script>

<style lang="scss" scoped>
.profile-info {
  display: flex;
  align-items: center;
  text-align: center;

  .info-item {
    flex: 1;
    padding: 15px 0;
    border-right: 2px solid #eee;
    border-bottom: 12px solid #eee;
  }

}
</style>
