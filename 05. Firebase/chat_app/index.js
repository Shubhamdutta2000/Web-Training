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
