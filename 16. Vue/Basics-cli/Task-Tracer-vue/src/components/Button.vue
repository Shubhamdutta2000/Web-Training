<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    showForm: String,
  },
  methods: {
    onClick() {
      // emit btn-click event for add new task
      this.$emit("btn-click");
    },
  },
};
</script>

<style scoped>
.btn {
  float: right;
}
</style>
