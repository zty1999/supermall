<template>
    <div class="profile-register">
      <div class="profile-photo"><img src="~assets/img/profile/avatar.svg" alt=""></div>
      <div class="register-info">
        <div>登录/注册</div>
        <div><img src="~assets/img/profile/phone.svg" alt=""><span>暂无绑定手机号</span></div>
      </div>
      <div class="arrow"><img src="~assets/img/common/arrow-left.svg" alt=""></div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style lang="scss" scoped>
.profile-register {
  display: flex;
  align-items: center;
  background: var(--color-tint);
  padding: 15px 20px;
  color: #fff;
  .profile-photo {
    width: 70px;
    height: 70px;
    /*border-radius: 50%;*/
    /*border: 1px solid #eee;*/
    img {
      width: 100%;
    }
  }
  .register-info {
    padding: 0 20px;
    flex: 1;
    line-height: 1.5;
    font-size: 16px;
    span {
      font-size: 12px;
    }
    img {
      height: 16px;
      vertical-align: middle;
    }
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    img {

      width: 20px;
      /*width: 30px;*/
      height: 20px;
    }
  }
}
  
</style>
