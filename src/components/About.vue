<template lang="pug">
.section__wrapper.aboutme__wrapper
  el-row
    el-col(:xs="24" :sm="12")
      .aboutme__text Hi I am Marion
    el-col(:xs="24" :sm="12")
      .aboutme__img
        img(:src='this.url')

</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      url: require('../assets/me.jpg'),
    }
  },
}
</script>
<style lang="scss">
.section{
  &__wrapper {
    overflow: hidden;
  }
}

.aboutme {
  &__wrapper {
    width: 100%;
  }
  &__text {
    color: azure;
  }
  &__img {
    height: 50vh;
    text-align: right;
    img {
      width: auto;
      height: 100%;
    }
  }
}
  
</style>