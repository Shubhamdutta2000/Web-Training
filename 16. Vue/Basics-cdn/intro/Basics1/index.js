// const app = Vue.createApp({
//     template: "<h1>Hello {{firstName}} {{lastName}}</h1>",
//     data() {
//         return {
//             firstName: "Shubham",
//             lastName: "Dutta"
//         }
//     }
// })

// without template
const app = Vue.createApp({
  data() {
    return {
      firstName: "Shubham",
      lastName: "Dutta",
      age: "male",
      showAge: true,
      image: "https://avatars.githubusercontent.com/u/62681943?v=4",
      x: 0,
      y: 0,
    };
  },

  methods: {
    getUser(fName, lName) {
      this.firstName = fName;
      this.lastName = lName;
      this.age = "male";
      this.image =
        "data:image/jpeg;base64,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";
    },
    // for toggling Age
    toggleAge() {
      console.log(this.showAge);
      this.showAge = !this.showAge;
    },

    // handling other events
    handleEvent(e, data) {
      console.log(e.type, e);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
