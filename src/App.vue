<template>
  <headerPage></headerPage>
  <router-view></router-view>
  <about-us></about-us>
  <teamMember></teamMember>
  <the-footer></the-footer>
</template>

<script>
import headerPage from "./components/headerPage.vue";
import theFooter from "./components/theFooter.vue";
import aboutUs from "./components/aboutUs.vue";
import teamMember from "./components/teamMembers.vue";

export default {
  name: "App",
  components: {
    headerPage,
    theFooter,
    aboutUs,
    teamMember,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
