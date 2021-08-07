$(document).ready(function () {
  const spaceship = $("#spaceship");

  // jquery code
  spaceship.css({
    position: "absolute",
    left: 500,
    top: 200,
    width: 160,
    height: 120,
  });

  var interval;

  $(document).on("keydown", function (e) {
    console.log(e.originalEvent.keyCode);
    var keyCode = e.originalEvent.keyCode;

    interval = setInterval(move, 100, keyCode); // infinitely cholbe
  });

  $(document).on("keyup", function (e) {
    console.log(e.originalEvent.key);

    clearInterval(interval);
  });

  let speed = 6;
  function move(keyCode) {
    if (keyCode === 39) {
      spaceship.css("left", spaceship.position().left + speed);
    }
    if (keyCode === 40) {
      spaceship.css("top", spaceship.position().top + speed);
    }
    if (keyCode === 38) {
      spaceship.css("top", spaceship.position().top - speed);
    }
    if (keyCode === 37) {
      spaceship.css("left", spaceship.position().left - speed);
    }
  }
});

// 1. Spaceship css jaate ota page er middle a chole ase
// 2. key up event r key down er event

// key-down  --> key press (key te haath ta press kore rekhechi)
// key-up  -->  key un-press (key theke haath ta chere debe jokhon)
