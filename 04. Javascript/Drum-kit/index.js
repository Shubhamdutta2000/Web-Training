const numDrumButtons = document.querySelectorAll(".drum").length;

function clickEvent(e) {
  // e -> event
  // e.target -> element (in this case here it is button element) which you click
  const buttonText = e.target.innerText; // getter
  // e.target.innerText = "r" // setter
  makeSound(buttonText);
  buttonAnimation(buttonText);
}

function keyPressEvent(e) {
  console.log(e);
  makeSound(e.key);
  buttonAnimation(e.key);
}

// CLICK EVENT
// for (var i = 0; i < numDrumButtons; i++) {
//   const button = document.querySelectorAll(".drum")[i];
//   button.addEventListener("click", clickEvent);
// }

document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", clickEvent);
});

// KEYPRESS EVENT
document.addEventListener("keypress", keyPressEvent);

// make sound
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log("key not matched");
      break;
  }
}

function buttonAnimation(key) {
  const button = document.querySelector(`.${key}`);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 150);
}

// OR
// document.querySelectorAll(".drum").forEach((button) => {
//   console.log(button);
// });

// TASK
// 1. LOOPING -
// 2. CLICK EVENTS -
// 3. KEYPRESS EVENT
// 4. makeSound function create
// 5. buttonAnimation function create
// 6. makeSound & buttonAnimation call ?? (click r keypress event)
