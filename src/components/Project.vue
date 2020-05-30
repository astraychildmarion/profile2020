<template lang="pug">
.project__wrapper
  .section__title-main.project__title-main {{ content }}
  el-tabs(:tab-position='tabPosition')
    el-tab-pane(v-for="item in project" :label="item.name")
      .section__block.project__block
        el-row
          el-col(:xs="{span:20, offset:2}" :sm="{span: 12, offset: 1}")
            .project__image
              img(:src="item.src")
          el-col(:xs="{span:20, offset:2}" :sm="{span: 9, offset: 1}")
            .project__detail
              .section__title(v-if="!item.link")  {{ item.name }}
                  span.sub  Project in {{ item.sub }}
              a.project__link(v-else :href="item.link" target="_blank" :title="item.name")
                .section__title  {{ item.name }}
                  span.sub  Project in {{ item.sub }}
                    i.el-icon-connection
              p.content {{ item.content }}
              .project__skill__wrapper
                div.project__skill__tag(v-for="skill in item.skill") {{ skill }}
</template>
<script>
export default {
  name: 'Project',
  data() {
    return {
      content: '過去作品',
      tabPosition: 'left',
      project: [
        {
          src: require('../assets/tigerfly.png'),
          sub: 'Awoo',
          name: 'TigerFly',
          content: 'TigerFly是再行銷工具，能做到精準分眾，穩定發信。內有數據儀表板、信件A/B test...等諸多功能。',
          skill: ['vue.js', 'vuex', 'Element UI', 'JavaScript (ES6+)', 'HTML & (S)CSS', ],
          link: 'https://www.tigerfly.tw/',
        },
        {
          src: 'dashboard',
          sub: 'Awoo',
          name: 'Dashboard',
          content: '數據展示平台，內有多個D3.js圖表。',
          skill: ['vue.js', 'vuex', 'Element UI' ,'JavaScript (ES6+)', 'HTML & (S)CSS', 'D3.js'],
        },
        {
          src: require('../assets/sdk.png'),
          sub: 'Awoo',
          name: 'Nununi SDK',
          content: '為了讓沒有工程能力的客戶能使用AI智慧標籤，而設計的插件;客戶只要在HTML中載入此插件，頁面上就會生成商品標籤。',
          skill: ['React.js', 'JavaScript (ES6+)', 'HTML & (S)CSS', 'RWD design'],
        },
        {
          src: require('../assets/project-v2.jpg'),
          sub: '嘉碼科技',
          name: '網站公版',
          content: '能夠快速更換主題，同時保有客製部分的公版',
          skill: ['vue.js', 'jQuery', 'Bootstrap', 'HTML & (S)CSS', 'RWD design'],
        },

      ]
    }
  },
}
</script>
<style lang="scss">
  .project {
    &__skill__tag {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 10px;
      color:#930EA5;
    }
    &__image {
      position: relative;
      border-radius: 2px;
      transition: all .5;
        img {
          width: 100%;
          position: relative;
          z-index: 1;
        }
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: -40px;
        left: 20px;
        background-color: rgba(#930EA5, .4);
        width: 100%;
        height: 100%;
        z-index: 0;
      }
    }
    &__detail {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @media only screen and (max-width: 767px) {
        position: relative;
        top: 0;
        transform: translateY(0%);
        margin-top: 20px;
      }
    }
    &__link {
      margin-left: 20px;
      transition: transform .3s;
      text-decoration: none;
      i {
        padding-left: 10px;
        font-size: 20px;
        &:hover {
          color: #930EA5;
          transform: scale(1.1);
          transition: transform .3s;
        }
      }
    }
  }
  .sub {
    font-size: smaller;
    font-weight: normal;
    padding-left: 10px;
  }
</style>