<template lang="pug">
#app
  el-container
    el-header Marion Ma
    About
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f2f2;
  color: #010101;
}
body {
  margin: 0;
}
</style>
