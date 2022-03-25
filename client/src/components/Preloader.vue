<template>
  <div class="page-loder"></div>
</template>
<script>
export default {
  name: "Preloader.vue",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      document.querySelector(".page-loder").classList.add("fade-out");
      setTimeout(function () {
        document.querySelector(".page-loder").style.display = "none";
      }, 600);
    },
  },
};
</script>
