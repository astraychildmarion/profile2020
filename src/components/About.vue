<template lang="pug">
.aboutme__wrapper
  el-row
    el-col(:xs="24" :sm="12")
      .aboutme__text Hi I am Marion
    el-col(:xs="24" :sm="12")
      .aboutme__img
        el-image(style="width: 100%" :src='url' :fit='fit')

</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      url: require('../assets/me.jpg'),
      fit: 'contain'
    }
  },
}
</script>
<style lang="scss">
.aboutme {
  &__wrapper {
    width: 100%;
    height: 50vh;
  }
  &__text {

  }
  &__img {

  }
}
  
</style>