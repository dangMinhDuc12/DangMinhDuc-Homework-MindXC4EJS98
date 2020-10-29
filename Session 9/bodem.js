let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let span = document.getElementById("span");
let i = 0;
span.textContent = i;
button1.onclick = function () {
  i = i + 1;
  span.textContent = i;
  console.log(i);
};
button2.onclick = function () {
  i = i - 1;
  span.textContent = i;
  console.log(i);
};
