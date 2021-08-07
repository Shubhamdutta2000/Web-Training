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


// read data
database.ref("messages/").on('value', (snapshot) => {
  const messages = snapshot.val();
  console.log(messages);
  // previous message delete
  document.getElementById("main-container").innerHTML = "";

  for (var key in messages) {
    var message = messages[key];
    console.log(message.message);
    console.log(message.name);

    const x = document.createElement("p");
    x.innerHTML = message.name + ": " + message.message;
    console.log(x);
    if (message.name === Name) {
      x.classList.add("bubble-right");
    } else {
      x.classList.add("bubble-left");
    }

    // add to html document
    document.getElementById("main-container").appendChild(x);

  }
});




// JS Template Literal

// Arrow function - JS ES6

// BaaS - Backend As a Service

// GOAL
// 1. Add data to database of firebase
// 2. Show or Read data from database to the client side
