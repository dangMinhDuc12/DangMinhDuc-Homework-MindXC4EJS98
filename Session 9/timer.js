let start = document.getElementById("start");
let stop = document.getElementById("stop");
let input = document.querySelector("input");
let div = document.querySelector("div");
let i;

start.onclick = function () {
  let b = input.value;
  i = setInterval(function () {
    b--;
    div.textContent = b;
    console.log(b);
  }, 1000);
};
stop.onclick = function () {
  clearInterval(i);
  div.textContent = "stopped";
};
