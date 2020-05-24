<template lang="pug">
  #app
    el-container
      el-header hihi
      About
      Education
      WorkExp
      Project
      Contact
</template>

<script>
import About from './components/About.vue'
import Education from './components/Education.vue'
import WorkExp from './components/WorkExp.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    About,
    Education,
    WorkExp,
    Project,
    Contact
  }
}
</script>

<style lang="scss">
#app {
  background-color: $background;
}

</style>
