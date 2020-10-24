//Function

// function myFunction () {            //Function khong co dau vao
//     //logic 
//     console.log('Hello World!');
// }

// let a = myFunction();
// console.log(a); 


//tinh dien tich tam giac biet duong cao va canh day

// function calculate (h, a) {
//     let s = a*h/2;
//     console.log(s);
//     return s;
    
// }

// let s = calculate(12, 10);
// console.log(s);
// calculate(5, 4);


// Phuong thuc (method)

// let person = {
//     name: "Peter",
//     age: 12,
//     sayHello: function(name){
//         console.log(`Hello ${name}`);
//         return this;

//     },
//     introduce: function(){
//         console.log(`Hello, my name is ${this.name}`);
//         console.log(this);
//         return this;
//     },
// };


// person.sayHello(this.name);
// console.log(this);

// person.introduce();



// //Tu khoa this

// let randomString = "Hello World 123";
// randomString.toLowerCase().toUpperCase();
// let a = new String('Hello World');
// console.log(a);

// person.introduce().sayHello("quan");


//DOM Document object model

let app = document.getElementById("app");
// console.log(app);
console.dir(app);

//Phuong thuc inner
// console.log(app.innerHTML); //in ra toan bo noi dung ben trong the 
// app.innerHTML = `<h1>Hello World</h1>`;
// console.log(app.innerText); // chi in ra text
// // app.innerText = `<h2>Hello World</h2>`
// console.log(app.textContent); // chi in ra text

// //Style
// console.log(app.style.backgroundColor);
// app.style.backgroundColor = "red";


// //Children
// let ul = document.getElementById("todo-list");
// console.log(ul.children[0].parentElement.parentElement); //parentElement truy cap phan tu cha
// console.log(ul.id); //lay ra id

// //Classlist
// console.log(ul.classList[0]);
// ul.classList.add("todo-4");
// console.log(ul.classList);

//creatElement()
//appendChild(),remove()

// const ul = document.getElementById("todo-list");
// console.log(ul);

// let li = document.createElement("li");  // tao ra li
// console.log(li);
// li.innerText = "hoc bai";
// console.log(li);
// ul.appendChild(li); // them vao the cha la ul

// ul.children[0].remove();







// //Goi thong qua Class name, Tag name
// let app2 = document.getElementsByClassName("app-2");
// console.log(app2);

// //Tag name
// let apps = document.getElementsByTagName("div");
// console.log(apps);

// //query bang ID, Class

// let app3 = document.querySelectorAll(".app-2");
// console.log(app3);
// //querySelector chi lay phan tu dau tien, querySelectorAll lay toan bo phan tu;
//REMEMBER children,classList,fisrtElementChild,inner HTML,classElementChild




//
// let app = document.getElementById("app");
// console.log(app);
// console.dir();

// app.onclick = function  () {
//     alert("hello world");
// }



// let a = document.getElementById("a");
// // let a1 = document.getElementById("a1");
// a.onclick = function() {
//     let a1 = document.getElementById("a1");
//     if (!a1.classList.contains("ex-1")){  // kiem tra xem classList co chua class ex-1 ko
//         // a1.style.backgroundColor = "black";
//         a1.classList.add("ex-1");
//     }
//     else {
//         // a1.style.backgroundColor = "white";
//         a1.classList.remove("ex-1");
//     }
// } // b1

// let b1 = document.getElementById("b1");

// let b = document.getElementById("b");
// b.onclick = function() {
//     // let c = (Math.random()*255).toFixed(0);
//     // let d = (Math.random()*255).toFixed(0);
//     // let e = (Math.random()*255).toFixed(0);
//     // b1.style.backgroundColor = `rgb(${c},${d},${e})`;

//     //C2
//     b1.style.backgroundColor = renderRandomColor();
// }// b2

// function renderRandomColor() {
//     let r = Math.floor(Math.random()*255);
//     let g = Math.floor(Math.random()*255);
//     let b = Math.floor(Math.random()*255);
//     let color = `rgb(${r},${g},${b})`;
//     return color;

    
// }


// let c = document.getElementById("c");
// let c1 = document.getElementById("c1");
// c.onclick = function() {
    
//     if (c1.style.visibility != "hidden"){
//         c1.style.visibility = "hidden";
        
//     }
//     else {
//         c1.style.visibility = "visible";
        
        
//     }
// }// b3