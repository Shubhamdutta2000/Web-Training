<template>
  <div>
    <!-- Check if showForm is true or not -->
    <div v-if="showForm">
      <!-- 
        Add Task Form 
        add-task event listener  
      -->
      <AddTask @add-task="addTask" />
    </div>

    <!-- 
      Bind attribute for passing tasks array to Tasks component
      Delete Task event listener 
    -->
    <Tasks
      @reminder-toggle="reminderToggle"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default {
  name: "Home",
  components: {
    Tasks,
    AddTask,
  },
  props: {
    showForm: Boolean,
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    // delete task
    async deleteTask(id) {
      if (confirm("Are You Sure To delete this?")) {
        // delete task from backend (DELETE)
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        // delete data from local tasks data
        res.status == 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : null;
      }
    },

    // reminder task
    async reminderToggle(id) {
      // fetch id task
      const task = await this.fetchTask(id);
      const updatedTask = { ...task, reminder: !task.reminder };

      // update task from backend (PUT)
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await res.json();
      // update task in tasks local data
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },

    // add task (get data from AddTask component)
    async addTask(task) {
      // add new task data to backend (POST)
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      // add task to local data tasks array
      this.tasks.push(data);
    },

    // fetch tasks from api (GET)
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },

    // fetch particular task by id from api (GET by id)
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },

  // after component loads
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
