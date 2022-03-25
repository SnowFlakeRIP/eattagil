<template>
  <div id="app">
    <body>
    <Preloader/>
    <Header v-bind:order="order"/>
    <Home/>
    <About/>
    <Menu v-on:order="get"/>
    <Testimonials/>
    <Team/>
    <Footer/>
    </body>
  </div>
</template>

<script>
import Preloader from "./components/Preloader";
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Menu from "./components/Menu.vue";
import Testimonials from "./components/Testimonials.vue";
import Team from "./components/Team.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Preloader,
    Home,
    About,
    Menu,
    Testimonials,
    Team,
    Footer,
  },
  data() {
    return {
      order: []
    };
  },
  methods: {
    get(a) {
      this.order.push(a)
    }
  }
};
</script>
