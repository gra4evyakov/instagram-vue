<template>
  <header class="header">
    <a href="#" class="header-logo"><img src="../assets/svg/logo.svg" alt="logo"></a>
    <div class="header-menu">
      <!-- <a class="header-menu__link" href="#"><img src="/svg/video.svg" alt="video"></a> -->
      <a class="header-menu__link" href="#"><img src="../assets/svg/heart.svg" alt="heart"></a>
      <a class="header-menu__link" href="#"><img src="../assets/svg/direct.svg" alt="direct"></a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  padding: 15px 20px 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E4E4E4;
  background: inherit;
  &-menu {
    display: flex;
    align-items: center;
    gap: 25px;
  }
}
</style>