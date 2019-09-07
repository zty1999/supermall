<template>
    <div class="check"  :class="{checked:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "checkButton",
      props: {
        isChecked: {
          type: Boolean,
          default: false,
        }
      },
      data() {
          return {

          }
      },
      methods: {
      }
    }
</script>

<style scoped>
.check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: auto 0;
  border-radius: 50%;
  border: 1px solid #ccc;
  /*background-color: #5ea732;*/

}
  .checked {
    background-color: var(--color-tint);
  }
</style>
