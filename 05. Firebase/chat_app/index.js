var database = firebase.database();

console.log(database);

//Taking name of user
var Name = prompt("Enter your name : ", "");

//Write data to database
function writeUserData() {
  var message = document.getElementById("message").value;
  database.ref("messages/").push().set({
    message: message,
    name: Name,
  });
  document.getElementById("message").value = "";
}

//Read data from database
database.ref("messages").on("value", (snapshot) => {
  var messages = snapshot.val();
  //delete previous messages from div
  document.getElementById("main-container").innerHTML = "";

  for (var key in messages) {
    var message = messages[key];
    var x = document.createElement("P");
    var t = document.createTextNode(`${message.name}: : ${message.message}`);
    x.classList.add("bubble");
    x.appendChild(t);
    document.getElementById("main-container").appendChild(x);
    console.log(t);
  }
});

// JS Template Literal

// Arrow function - JS ES6

// BaaS - Backend As a Service

// GOAL
// 1. Add data to database of firebase
// 2. Show or Read data from database to the client side
