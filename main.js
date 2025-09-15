import { factorial } from "./mathModule.js";

function calc(event) {
  event.preventDefault();
  const num = document.getElementById("num").value;

  const result = factorial(num);
  //   alert(result);
  //   console.log(result);

  document.getElementById("result").value = result;
}

const form = document.getElementById("facto-form");
form.addEventListener("submit", calc);
