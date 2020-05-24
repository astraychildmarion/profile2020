<template lang="pug">
.work__wrapper
  .work__title {{ content }}
  .work__block(v-for="item in work")
    .year {{item.year}}
    .company {{item.company}}
    .title {{item.title}}
    .achievement1 {{item.achievement1}}
    .achievement2 {{item.achievement2}}
    .achievement3 {{item.achievement3}}
</template>
<script>
export default {
  name: 'Work',
  data() {
    return {
      content: '工作經歷',
      work: [
        {
          year: '2019 06 - Now',
          company: 'Awoo',
          title: '前端工程師',
          achievement1: '專案維護以及功能開發',
          achievement2: '將php CI 框架的產品，以 vue.js 進行重構，做到前後端分離',
          achievement3: '使用 React.js 做SDK，配合後端Api，幫客戶的產品智能分類',
        },
        {
          year: '2017 02 - 2019 03',
          company: '嘉碼科技',
          title: '網頁設計師',
          achievement1: '網站營運:依照客戶需求，進行版面的更新、修正。配合行銷活動，製作一頁式網頁',
          achievement2: '網頁設計:博弈類網站設計，首頁、會員中心等等大型頁面至按鈕等細部UI設計',
          achievement3: '切版 & 互動效果:scss 切版及配合Bootstarp框架使用，JQuery做互動效果。',  
        },
        {
          year: '2015 06 - 2016 02',
          company: '真好玩股份有限公司',
          title: '行銷專員',
          achievement1: 'Facebook 廣告投放: 廣告文案發想以及策略規劃、台灣、東南亞市場的投放操作、數據分析。',
          achievement2: '各國手機遊戲市場調查，定期向管理群簡報。',
          achievement3: '遊戲英語化校對',      
        },
      ]
    }
  },
}
</script>