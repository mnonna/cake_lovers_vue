<template>
  <div id="app">
    <Navbar />
    <Main />
    <Crafts />
    <Cakes />
    <Contact />
    <Footer v-if="!mobile"/>
    <MobileNav v-if="mobile" />
  </div>
</template>

<script>
const Main = () => import("./components/Main");
const Navbar = () => import("./components/menu/Navbar");
const Crafts = () => import("./components/Crafts");
const Cakes = () => import("./components/Cakes");
const Contact = () => import("./components/Contact");
const MobileNav = () => import("./components/menu/NavbarMobile");
const Footer = () => import("./components/Footer");
export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Crafts,
    Cakes,
    Contact,
    Footer,
    MobileNav
  },
  data() {
    return {
      mobile: null
    };
  },

  mounted() {
    this.initMobileNav();
    window.addEventListener("resize", this.initMobileNav);
  },

  methods: {
    initMobileNav: function() {
      window.innerWidth <= 768 ? (this.mobile = true) : (this.mobile = false);
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");

body,
html {
  scroll-behavior: smooth;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
}

p,
span {
  font-family: "Montserrat", sans-serif;
  @media screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $base-background-color;
}
</style>
