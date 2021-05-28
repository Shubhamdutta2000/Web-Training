<template>
  <div>
    <div :key="task.id" v-for="task in tasks">
      <!-- 
        Delete Task event listender and Emit &
        Reminder Task event listender and Emit
      -->
      <Task
        @reminder-toggle="$emit('reminder-toggle', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "Tasks",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
  emit: ["delete-task", "reminder-toggle"],
};
</script>
