<template>
  <ul class="scrolling-component">
    <Post v-for="(post, index) in posts" :post="post" :key="index" />
    <div id="infinite-scroll-trigger"></div>
  </ul>
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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) loadMorePosts()
    })
  })
  observer.observe(document.querySelector('#infinite-scroll-trigger'))
},)

onUnmounted(() => {
  observer.disconnect()
})

</script>

<style lang="scss" scoped></style>