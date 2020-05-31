<template lang="pug">
.contact__wrapper
  p.contact__detail 路過歡迎說聲嗨，你可以
    a(href="mailto:allidareused@gmai.com") 寫信
    | 給我，也可以加我
    a(href="https://www.instagram.com/adventchildalisha/?hl=zh-tw" target="_blank") IG
    |。 <br/>
    | 不排斥其他工作機會或是合作。
  p.contact__auth © 2020 — by Marion Ma using Vue.js
</template>
<script>
export default {
  name: 'Contact'
}
</script>
<style lang="scss">
.contact {
  &__wrapper {
    width:98%;
    height: 200px;
    margin: 50px auto;
    background-color: #34538A;
    color: #F1EFE3;
    border-radius: 8px;
    box-shadow: 5px 5px 3px #ccc;
    position: relative;
    // align-items: strench;

    text-align: center;
  }
  &__detail {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    a {
      padding: 0 10px;
      text-decoration: none;
      color: #F46F5F;
    }
  }
  &__auth {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0%;
  }

}
  
</style>