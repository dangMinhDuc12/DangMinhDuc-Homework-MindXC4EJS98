//1
let timeSheet = [
  {
    project: "Learn Front End",
    task: "Learn HTML",
    timeSpent: 6,
  },
  {
    project: "Learn Front End",
    task: "Learn CSS",
    timeSpent: 8,
  },
  {
    project: "Learn Front End",
    task: "Learn Variables and Data types",
    timeSpent: 6,
  },
  {
    project: "Learn git",
    task: "Learn git basics",
    timeSpent: 2,
  },
];
console.log(timeSheet);

//3
let tBody = document.querySelector("tbody");
console.log(tBody);

//4
// for (let i = 0; i < timeSheet.length; i++) {
//   let a = `<tr><td>${timeSheet[i].project}</td><td>${timeSheet[i].task}</td><td>${timeSheet[i].timeSpent}</td></tr>`;
//   tBody.innerHTML += a;
// }
tBody.children[0].remove();

//6
// let pro = document.getElementById("pro");
// let ta = document.getElementById("ta");
// let ti = document.getElementById("ti");
// let button = document.querySelector("button");
// button.onclick = function () {
//   let b = `<tr><td>${pro.value}</td><td>${ta.value}</td><td>${ti.value}</td></tr>`;
//   tBody.innerHTML += b;
// };

//8
// for (let i = 0; i < timeSheet.length; i++) {
//   let a = `<tr><td>${timeSheet[i].project}</td><td>${timeSheet[i].task}</td><td>${timeSheet[i].timeSpent}</td><td><button class ="delete">X</button></td></tr>`;
//   tBody.innerHTML += a;
// }
// let pro = document.getElementById("pro");
// let ta = document.getElementById("ta");
// let ti = document.getElementById("ti");
// let button = document.querySelector("button");
// button.onclick = function () {
//   let b = `<tr><td>${pro.value}</td><td>${ta.value}</td><td>${ti.value}</td><td><button class = "delete">X</button></td></tr>`;
//   tBody.innerHTML += b;
// };
// tBody.onclick = function (e) {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.parentElement.remove();
//   }
// };

//12
let pro = document.getElementById("pro");
let ta = document.getElementById("ta");
let ti = document.getElementById("ti");
let add = document.getElementById("add");
let clear = document.getElementById("clear");
for (let i = 0; i < timeSheet.length; i++) {
  let a = `<tr><td>${timeSheet[i].project}</td><td>${timeSheet[i].task}</td><td>${timeSheet[i].timeSpent}</td><td><button class ="delete">X</button><button class = "update">U</button></td></tr>`;
  tBody.innerHTML += a;
}
tBody.onclick = function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
};
let update = document.getElementsByClassName("update");
console.log(update);
for (let i = 0; i < timeSheet.length; i++) {
  update[i].onclick = function () {
    add.textContent = `Update`;
    pro.value = timeSheet[i].project;
    ta.value = timeSheet[i].task;
    ti.value = timeSheet[i].timeSpent;
  };
}

clear.onclick = function () {
  pro.value = "";
  ta.value = "";
  ti.value = "";
};
