<template lang="pug">
#app
  el-container
    el-header Marion Ma
    About
    Education
    Project
    Work
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
    Project,
    Work,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #010101;
  color: azure;
}
body {
  margin: 0;
}
</style>
