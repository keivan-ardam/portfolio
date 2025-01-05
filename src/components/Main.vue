<template>
  <section class="container">
    <Home ref="Home" :menu="menu" />
    <About ref="About" />
    <About_2 />
    <About_3 />
    <Skills ref="Skills" />
    <Resume ref="Resume" />
    <Contact ref="Contact" />
    <SideBar :menu="menu"></SideBar>
  </section>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
import About_2 from "./About_2.vue";
import About_3 from "./About_3.vue";
import Skills from "./Skills.vue";
import Resume from "./Resume.vue";
import Contact from "./Contact.vue";
import SideBar from "./SideBar.vue";

export default {
  components: {
    Home,
    About,
    About_2,
    About_3,
    Skills,
    Resume,
    Contact,
    SideBar,
  },
  data() {
    return {
      menu: [
        { label: "Home", icon: "fa-solid fa-house", ref: null },
        { label: "About", icon: "fa-solid fa-user", ref: null },
        { label: "Skills", icon: "fa-solid fa-bolt", ref: null },
        { label: "Resume", icon: "fa-solid fa-scroll", ref: null },
        { label: "Contact", icon: "fa-solid fa-phone", ref: null },
      ],
    };
  },
  mounted() {
    this.menu.forEach((item) => {
      item.ref = this.$refs[item.label];
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
}
</style>
