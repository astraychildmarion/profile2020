<template lang="pug">
#app
  el-container
    el-header 
      h3 Marion Ma
    About
    el-row
      el-col(:xs="{span:20, offset:2}" :sm="{span: 18, offset: 3}")
        Education
        Work
        Project
    Contact
</template>

<script>
import About from './components/About.vue'
import Education from './components/Education.vue'
import Project from './components/Project.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    About,
    Education,
    Work,
    Project,
    Contact
  }
}
</script>

<style style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  background-color: #F2F6FC;
  color: #010101;
}
body {
  margin: 0;
}

.section__wrapper {
  padding: 50px 0;
}

.section__title-main {
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 20px;
}

.section__title {
  font-weight: 500;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.section__block {
  margin-left: 30px;
}


</style>
