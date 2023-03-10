<template>
  <footer class="footer">
    <ul class="footer-menu">
      <li class="footer-menu__item"><img src="../assets/svg/home.svg" alt="home"></li>
      <li class="footer-menu__item"><img src="../assets/svg/search.svg" alt="search"></li>
      <li class="footer-menu__item"><img src="../assets/svg/video.svg" alt="video"></li>
      <li class="footer-menu__item"><img src="../assets/svg/reel.svg" alt="reel"></li>
      <li class="footer-menu__item"><img src="../assets/img/avatar.png" alt="avatar"></li>
    </ul>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  height: 50px;
  bottom: 0;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E4E4E4;
  background: inherit;
  &-menu {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__item:last-child img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>