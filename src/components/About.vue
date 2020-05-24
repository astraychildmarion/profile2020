<template lang="pug">
.section__wrapper.aboutme__wrapper
  el-row
    el-col(:xs="24" :sm="10")
      p.aboutme__text {{ content }}
      p.aboutme__text {{ content2 }}
      p.aboutme__text {{ content3 }}
      p.aboutme__text {{ content4 }}
      p.aboutme__text {{ content5 }}
    el-col(:xs="24" :sm="14")
      .aboutme__img
        //- img(:src='this.url')

</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      content: '嗨，我叫做 Marion，是一位住在台北的前端工程師。',
      content2: '我擁有多元背景，通曉俄語、英語，懂Facebook廣告投放，愛好哲學思考。',
      content3: '於2017年轉職為網頁設計師。',
      content4: '喜歡看見「畫面」隨著資料變化，所以選擇前端領域，於2019年轉職成功。',
      content5: '擅長調整畫面以及RWD網頁實作，並且加入 ui/ux 思維來優化專案。',
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
    height: 50vh;
    background-color: #010101;
    color: #fff;
  }
  &__text {
    color: azure;
  }
  &__img {
    height: 50vh;
    text-align: right;
    background-image: url('../assets/me.jpg');
    background-position: right; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */
  }
}
  
</style>