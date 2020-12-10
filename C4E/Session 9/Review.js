//Cau 8
// function me() {
//   alert("Ten toi la Duc va toi muon thanh lap trinh vien");
// }
// me();

//Cau 9
// function user(name, wish) {
//   alert(`Ten toi la ${name} va dieu toi muon lam trong nam nay la ${wish}`);
// }
// user("Quan", "Web Developer");

//Cau 10
// function user(name, wish) {
//   if (wish == undefined) {
//     alert("Ban thieu dieu uoc mat roi");
//   } else {
//     alert(`toi ten la ${name} dieu uoc cua toi la ${wish}`);
//   }
// }
// user("duc");

//Cau 11
// //11.2
// let button = document.querySelector("button");
// console.log(button);
// //11.3
// button.onclick = function () {
//   console.log("Upper it!!! just clicked");
// };
// //11.4
// let input = document.querySelector("input");
// console.log(input);
// //11.5
// button.onclick = function () {
//   console.log("Upper it!!! just clicked");
//   console.log(`User name ${input.value}`);
// };
// //11.6
// button.onclick = function () {
//   console.log("Upper it!!! just clicked");
//   console.log(`User name ${input.value}`);
//   console.log(`User name uppercase ${input.value.toUpperCase()}`);
// };
// //11.7
// let div = document.querySelector("div");
// console.log(div);
// //11.8
// button.onclick = function () {
//   console.log("Upper it!!! just clicked");
//   console.log(`User name ${input.value}`);
//   console.log(`User name uppercase ${input.value.toUpperCase()}`);
//   div.textContent = input.value.toUpperCase();
// };

//Cau 12
//12.1
let items = ["Backpack", "MiBand watch", "Ring"];
console.log(items);

//12.3
let ul = document.getElementById("item-list-ul");
console.log(ul);

12.4;
// for (i = 0; i < items.length; i++) {
//   let li = document.createElement("li");
//   let span = document.createElement("span");
//   span.textContent = items[i];
//   li.appendChild(span);
//   ul.appendChild(li);
// }

//12.6
let input = document.querySelector("input");
console.log(input);
let button = document.querySelector("button");
console.log(button);

//12.7
button.onclick = function () {
  console.log("Add button clicked");
};

//12.8
button.onclick = function () {
  console.log("Add button clicked");
  console.log(input.value);
};

//12.9
button.onclick = function () {
  console.log("Add button clicked");
  console.log(input.value);
  items.push(input.value);
  console.log(items);
};

//12.10
button.onclick = function () {
  console.log("Add button clicked");
  console.log(input.value);
  items.push(input.value);
  console.log(items);
  let addItem = `<li><span>${input.value}</span></li>`;
  ul.innerHTML += addItem;
};

//12.11
button.onclick = function () {
  console.log("Add button clicked");
  console.log(input.value);
  items.push(input.value);
  console.log(items);
  let addItem = `<li><span>${input.value}</span></li>`;
  ul.innerHTML += addItem;
  input.value = "";
};

//12.12
for (let i = 0; i < items.length; i++) {
  //   let li = document.createElement("li");
  //   let span = document.createElement("span");
  //   let button = document.createElement("button");
  //   button.textContent = "Remove";
  //   span.textContent = items[i];
  //   li.append(span, button);
  //   ul.append(li);
  //cach 2

  let itemsList = `<li><span>${items[i]}</span><button class = "button1">Remove</button></li>`;
  ul.innerHTML += itemsList;
}
console.log(ul);

//12.13
// ul.onclick = function (e) {
//   if (e.target.classList.contains("button1")) {
//     console.log("Remove button clicked");
//   }
// };

//12.14
let button1 = document.getElementsByClassName("button1");
for (let i = 0; i < button1.length; i++) {
  button1[i].onclick = function () {
    console.log("Remove button clicked");
    console.log(`Items ${i}`);
  };
}
//12.15
