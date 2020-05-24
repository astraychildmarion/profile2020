<template lang="pug">
  .education-wrapper
    .education-title {{ content }}
      .education-block(v-for="item in educationExp")
        .education-year {{item.year}}
        .education-school {{item.school}}
        .education-content {{item.content}}
</template>
<script>
export default {
  name: 'Education',
  data() {
    return {
      content: '關於求學',
      educationExp: [
        {
          year: '隨時隨地',
          school: '自學',
          content: '是自學讓我處在今天的位置，範圍很廣：關於網路開發，還有這個世界的一切。'
        },
        {
          year: '2017',
          school: '資策會 uiux 設計師養成班',
          content: 'Adobe Photoshop、Ilustrator、Html、CSS、javascript、Jquery、Php、Ux 概念'
        },
        {
          year: '2012',
          school: '俄羅斯國立烏拉爾大學',
          content: '交換學生，去俄羅斯中部的葉卡捷琳堡學習俄語以及當地文化。'
        },
        {
          year: '2007-2013',
          school: '政治大學 斯拉夫語文學系',
          content: '主修俄語，輔修哲學'
        },
      ]

    }
  },
}
</script>