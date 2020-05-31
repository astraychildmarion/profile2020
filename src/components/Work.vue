<template lang="pug">
.section__wrapper.work__wrapper
  .section__title-main.work__title-main {{ content }}
  el-tabs(:tab-position='tabPosition')
    el-tab-pane(v-for="item in work" :label="item.company")
      .section__block.work__block
        .section__title.work__title {{item.title}}
          span.sub  {{item.companyAt}}
        .year {{item.year}}
        ul
          li.achievement {{item.achievement1}}
          li.ahievement {{item.achievement2}}
          li.achievement {{item.achievement3}}
</template>
<script>
export default {
  name: 'Work',
  data() {
    return {
      tabPosition: 'left',
      content: '工作經歷',
      work: [
        {
          year: '2019/06 - Now',
          company: 'Awoo',
          companyAt: '阿物股份有限公司',
          title: '前端工程師',
          achievement1: '專案維護以及功能開發',
          achievement2: '將php CI 框架的產品，以 vue.js 進行重構，做到前後端分離',
          achievement3: '使用 React.js 做SDK，配合後端Api，幫客戶的產品智能分類',
        },
        {
          year: '2017/02 - 2019/03',
          company: '嘉碼科技',
          companyAt: '嘉碼科技',
          title: '網頁設計師',
          achievement1: '網站營運:依照客戶需求，進行版面的更新、修正。配合行銷活動，製作一頁式網頁',
          achievement2: '網頁設計:博弈類網站設計，首頁、會員中心等等大型頁面至按鈕等細部UI設計',
          achievement3: '切版 & 互動效果:scss 切版及配合Bootstarp框架使用，JQuery做互動效果。',  
        },
        {
          year: '2015/06 - 2016/02',
          company: '真好玩',
          companyAt: '真好玩股份有限公司',
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
<style lang="scss">
  .work {
    &__block {
      .company, .year {
        display: inline-block;
        margin-right: 30px;
        margin-bottom: 5px;
      }
      ul {
        list-style: none; /* Remove default bullets */
        padding: 0;

      }

      li::before {
        content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: #B1262D; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */

      }
    }
    // &__title {
    //   span {
    //     font-size: smaller;
    //     font-weight: normal;
    //     padding-left: 10px;
    //   }
    // }
  }
</style>