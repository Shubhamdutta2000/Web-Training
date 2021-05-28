<template>
  <!-- 
    add class for reminder task 
    Emit reminder task custom event
  -->
  <div
    @dblclick="$emit('reminder-toggle', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>{{ task.text }}</h3>
    <!-- 
         Click event &
         emit delete task custom event 
    -->
    <i @click="$emit('delete-task', task.id)" class="fas fa-trash-alt"></i>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scope>
.fas {
  color: red;
  float: right;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  color: rgb(0, 0, 177);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
