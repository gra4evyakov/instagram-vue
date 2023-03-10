<script setup>
import Header from './components/Header.vue'
import Posts from './components/PostList.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container">
    <Header />
    <Posts />
    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
.container {
  position: relative;
  max-width: 414px;
  min-width: 320px;
  margin: 0 auto;
  border-left: 1px solid #E4E4E4;
  border-right: 1px solid #E4E4E4;
  background: #fff;
}
</style>
