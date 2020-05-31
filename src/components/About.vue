<template lang="pug">
.aboutme__wrapper
  .aboutme__size.aboutme__text__wrapper
    p.aboutme__text {{ content }}
    p.aboutme__text {{ content2 }}
    p.aboutme__text {{ content3 }}
    p.aboutme__text {{ content4 }}
    p.aboutme__text {{ content5 }}
  .aboutme__size.aboutme__img
    img(:src='this.url')

</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      url: require('../assets/me2.jpg'),
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
.aboutme {
  &__wrapper {
    width:98%;
    height: 500px;
    overflow: hidden;
    background-color: #34538A;
    color: #F1EFE3;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 5px 5px 3px #ccc;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 1100px) {
      height: 450px;
    }
  }
  &__text {
    color: azure;
    &__wrapper {
      padding: 50px 20px;
      width: 50%;
      text-align: left;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @media only screen and (max-width: 1100px) {
        z-index: 2;
      }
    }
  }
  &__img {
    border-radius: 0 8px 8px 0;
    position: absolute;
    right: 0;
    bottom: -10px;
    @media only screen and (max-width: 1100px) {
      top: 0;
      bottom: 0;
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(#000, .3);
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  &__size {
    width: 50%;
    @media only screen and (max-width: 1100px) {
      width: 100%;
    }
  }
}
  
</style>