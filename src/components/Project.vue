<template lang="pug">
.project__wrapper
  .project__title {{ content }}
  .project__block(v-for="(item, index) in project")
    .project__image(style="backgroundImage:url(`../assets/work${index}.jpg`)")
    .project__detail
      .subtitle Project in {{ item.sub }}
      .name {{ item.name }}
      .content {{ item.content }}
      .skill {{ item.skill }}
</template>
<script>
export default {
  name: 'Project',
  data() {
    return {
      content: '過去作品',
      project: [
        {
          src: '123',
          sub: 'Awoo',
          name: 'Nununi TigerFly',
          content: '再行銷工具',
          skill: '1 2 3',
        },
        {
          src: '123',
          sub: 'Awoo',
          name: 'Nununi Dashboard',
          content: '展示各項數據',
          skill: '1 2 3',
        },
        {
          src: '123',
          sub: 'Awoo',
          name: 'Nununi SDK',
          content: '方便客戶在自己的網站上，使用AI運算出來的標籤',
          skill: 'React.js',
        },
        {
          src: '123',
          sub: '嘉碼科技',
          name: '公版一',
          content: '',
          skill: 'vue.js',
        },
        {
          src: '123',
          sub: '嘉碼科技',
          name: '公版二',
          content: '',
          skill: 'vue.js',
        },
      ]
    }
  },
}
</script>