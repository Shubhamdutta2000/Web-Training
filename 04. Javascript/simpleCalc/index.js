function dis(val) {
  document.getElementById("input").value += val;
}

function displayAnswer() {
  let x = document.getElementById("input").value;
  console.log(typeof x);
  let y = eval(x);
  document.getElementById("input").value = y;
}

function clearAnswer() {
  document.getElementById("input").value = "";
}

function backspaceEmple() {
    var element = document.getElementById("input").value; //79
    document.getElementById("input").value = element.substring(
      0,
      element.length - 1
    );
}
