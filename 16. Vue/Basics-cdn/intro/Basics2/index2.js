const app = Vue.createApp({
  data() {
    return {
      url: "https://github.com/Shubhamdutta2000/",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "./assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "./assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "./assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    // for toggling fav (onclick style changes of each list)
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },

  // computed property is a way to define a data property inside our components that depends on other data thatwe have inside that component
  computed: {
    filteredBooks() {
      console.log(this.books.filter((book) => book.isFav));
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
