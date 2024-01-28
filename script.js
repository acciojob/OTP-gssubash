//your JS code here. If required.
const container = document.querySelector(".code-container");

function onInput(event) {
  console.log("Event triggered");
  const curElement = event.target;
  if (curElement.value) {
    lastEnteredValue = curElement;

    curElement.nextElementSibling && curElement.nextElementSibling.focus();
  }
}

function onBackspace(event) {
  const e = event.target;

  console.log("inside backspace");

  e.value = "";
  e.previousElementSibling && e.previousElementSibling.focus();
}

function onEnter(event) {
  console.log('inside Enter');
  event.target.nextElementSibling && event.target.nextElementSibling.focus();
}

function keyUps(event) {
  if (event.key === "Enter") {
    onEnter(event);
  } else if (event.key === "Backspace") {
    onBackspace(event);
  }
}

let noOfInput = 6;

for (let i = 1; i <= noOfInput; i++) {
  const inputs = document.createElement("input");
  inputs.maxLength = 1;
  inputs.className = "code";
  inputs.addEventListener("input", onInput);
  inputs.addEventListener("keyup", keyUps);
  container.appendChild(inputs);
}
