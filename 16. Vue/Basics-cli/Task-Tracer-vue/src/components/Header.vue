<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- 
      Use btn-click event listener &
      Emit toggle-form event for adding new task
      Change text & color dynamically acc. to showForm
     if current route is in home route then only show this Button
    -->

    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-form')"
      :text="showForm ? 'Hide Form' : 'Show Form'"
      :color="showForm ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  // @ METHOD 1:-
  // props: ['title'],

  // // @ METHOD 2:-
  // props: {
  //   title: {
  //     type: String,
  //     default: "Hello World",
  //   },

  // @ METHOD 3:-
  props: {
    title: String,
    showForm: Boolean,
  },
  components: {
    Button,
  },

  // for reactivity
  computed: {
    // for checking that if the current route is "/" or not
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
