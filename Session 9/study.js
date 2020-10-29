//Câu 3
/*Biến khai báo bởi let không quan trọng scope còn biến khai báo bởi var có scope là global vì vậy biến khai báo bởi let sẽ không thay đổi khi chạy hàm nó chỉ thay đổi trong hàm đó, còn biến khai báo bởi var sẽ thay đổi vì biến var có scope là global*/

//Câu 4
// let liElements = document.getElementsByTagName("li");
// console.log(liElements[1]);
// for (let i = 0; i < liElements.length; i++) {
//   console.log(liElements[i]);
// }

//Cau 5
// let divElements = document.getElementsByClassName("singer");
// console.log(divElements[1]);
// for (i = 0; i < divElements.length; i++) {
//   console.log(divElements[i]);
// }

//Cau 7
//7.1 event.target se in ra 2 element la <button id ="button1"></button> va <button id ="button2"></button>
//7.2
let inputElement = document.querySelector("input");
inputElement.onkeydown = function (e) {
  console.log(e.key);
}; // in ra e.key se in ra moi thu minh vua nhap vao input
