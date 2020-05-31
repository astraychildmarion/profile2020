<template lang="pug">
  .section__wrapper.education__wrapper
    .section__title-main.education__title-main {{ content }}
    el-tabs(:tab-position='tabPosition')
      el-tab-pane(:label='item.year' v-for="item in educationExp")
        .section__block
          .section__title.education__school-title {{item.school}}
          .education__content(v-for="i in item.content") {{i}}
  
</template>
<script>
export default {
  name: 'Education',
  data() {
    return {
      tabPosition: 'left',
      content: '關於求學',
      educationExp: [
        {
          year: '隨時隨地',
          school: '自學',
          content: ['書本、影片、網路文章、一段對話、同事...。', '我現在會的東西，絕大多數靠著自學而來;這是一段不會結束的過程。']
        },
        {
          year: '2017',
          school: '資策會 uiux 設計師養成班',
          content: ['設計以及程式並重的設計師養成班。影像後製到切版、PHP、Jquery、ux概念都有教。']
        },
        {
          year: '2012',
          school: '俄羅斯國立烏拉爾大學',
          content: ['交換學生，去俄羅斯中部的葉卡捷琳堡學習俄語以及文化。']
        },
        {
          year: '2007-2013',
          school: '政治大學 斯拉夫語文學系',
          content: ['主修俄語，輔修哲學']
        }
      ]
    }
  },
}
</script>