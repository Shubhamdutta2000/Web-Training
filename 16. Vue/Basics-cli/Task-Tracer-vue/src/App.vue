<template>
  <div class="container">
    <!-- 
      toggle-form event listener 
      pass showForm value as a props to Header Component
    -->
    <Header
      @toggle-form="toggleForm"
      :showForm="showForm"
      title="Task Tracer"
    />
    <!-- Pass showForm props to router view component (needed in Home route) -->
    <router-view :showForm="showForm"> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      showForm: false,
    };
  },

  methods: {
    // toggle form (for viewing form onclick)
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 600px;
  margin: 50px auto;
  overflow: auto;
  min-height: 400px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
