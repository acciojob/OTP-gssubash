const [container] = document.getElementsByClassName("code-container");

let inputCount = 6;



for (let i = 1; i <= inputCount; i++) {
  const inputItem = document.createElement("input");
  inputItem.classList.add("code");
  inputItem.id = "code-"+i;
  inputItem.placeholder = "0";
  inputItem.maxLength = 1;

	inputItem.addEventListener('focus',()=>{});
  inputItem.addEventListener("input", onInput);
  inputItem.addEventListener("keyup", onkeyUp);
  inputItem.addEventListener("keyup", onEnterKey);

  container.appendChild(inputItem);
}

function onInput(e) {
  const currentElement = e.target;
  const nextElement = currentElement.nextElementSibling;
  if (currentElement.value && nextElement) {
    nextElement.focus();
  }
}

function onkeyUp(e) {
  const currentElement = e.target;
  const previousElement = currentElement.previousElementSibling;
  if (currentElement.value == "" && e.key === "Backspace" && previousElement) {
    previousElement.focus();
  }
}

function onEnterKey(e) {
	const currentElement = e.target;
  const nextElement = currentElement.nextElementSibling;
  if (currentElement.value && e.key === "Enter" && nextElement) {
    nextElement.focus();
  }
}