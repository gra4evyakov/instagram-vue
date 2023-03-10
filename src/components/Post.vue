<template>
  <li class="post">
    <div class="post-top">
      <User :user="post.user" />
      <button class="post-more"><img src="../assets/svg/more.svg" alt="more"></button>
    </div>
    <img class="post-image" :src="post.img" alt="photo">
    <div class="post-buttons">
      <div class="post-buttons-left">
        <button><img src="../assets/svg/heart.svg" alt="heart"></button>
        <button><img src="../assets/svg/comment.svg" alt="comment"></button>
        <button><img src="../assets/svg/direct.svg" alt="direct"></button>
      </div>
      <button><img src="../assets/svg/collect.svg" alt="collect"></button>
    </div>
    <div class="post-description">
      <span class="post-description__user">{{ post.user }}</span>
      <span class="post-description__text">{{ post.description }}</span>
    </div>
  </li>
</template>

<script setup>
import User from './User.vue';
const props = defineProps({
  post: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
.post {
  padding-bottom: 30px;
  border-bottom: 1px solid #E4E4E4;

  &-top {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #E4E4E4;
  }

  &-description {
    padding: 0 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 13.5px;
    line-height: 16px;

    &__user {
      font-weight: 600;
      margin-right: 10px;
    }
  }

  &-image {
    width: 100%;
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px;

    &-left {
      display: flex;
      gap: 15px;
    }
  }
}
</style>