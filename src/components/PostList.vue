<template>
  <div class="scrolling-component" ref="scrollComponent">
    <Post v-for="(post, index) in posts" :post="post" :key="index" />
  </div>
</template>

<script setup>
import Post from './Post.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import getPosts from '../api/getPosts';

const loadMorePosts = () => {
  let newPosts = getPosts(5)
  posts.value.push(...newPosts)
}

const posts = ref(getPosts(5))
const scrollComponent = ref(null)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e) => {
    if ((window.innerHeight + window.pageYOffset >= document.body.offsetHeight)) {
      loadMorePosts()
    }
};
</script>

<style lang="scss" scoped>
</style>