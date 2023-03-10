<template>
  <div class="user">
    <img class="user-avatar" src="../assets/img/avatar.png" alt="avatar">
    <div class="user-text">
      <span class="user-text__name">{{ user }}</span>
      <span class="user-text__location">Saratov</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  &-avatar {
    width: 35px;
    height: 35px;
  }
  &-text {
    margin-left: 5px;
    font-family: 'Poppins', sans-serif;
    &__name {
      display: block;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
    }
    &__location {
      display: block;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>