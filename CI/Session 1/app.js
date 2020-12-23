//var / let /const
// function compare() {
//   if(true) {
//     var a = 1;
//     let b = 2;
//     const c = 1;
//   }
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// compare();


//String comparison
// const str = 'Nguyen Van A';
// const str2 = 'NGUYEN Van A';
// console.log(str.length);
// console.log(str.split(' ')[0]);
// console.log(str.toLowerCase().includes('nguyen'));


//So sánh
// const num = 1;
// const char = '1';
// console.log(num === char);


//Array
// const arr = [1,2,3,4];

// //Thêm vào cuối
// arr.push(5);
// //Thêm vào đầu
// arr.unshift(0);
// //Check vị trí phần tử trong arr
// console.log(arr.indexOf(1));
// //Không có trả về -1
// console.log(arr.indexOf(8));
// //Xóa 1 phần tử ở vị trí thứ 2 của arr
// arr.splice(2,1);


//Object
// const student = {
//   name: 'Nguyen Van A',
//   age: 18,
//   submit: function() {
//     console.log('submit');
//   }
// };

// student.name = 'abc';
// console.log(student.name);
// student.submit();


//Arrow Function
// const sum = (a, b) => a + b;

//Bài 1
// function centuryFromYear(year) {
//   return Math.ceil(year / 100)
// }

// //Bài 2 check xem string có đối xứng hay không
// //Cách 1
// function checkPalindrome(inputString) {
//   function checkPalindrom (str) {
//     return str == str.split('').reverse().join('');//reverse(): đảo ngược mảng
//   }
// }

// //Cách 2 
// function fastestIsPalindrome(str) {
//   var len = Math.floor(str.length / 2);
//   for (var i = 0; i < len; i++) {
//     if (str[i] !== str[str.length - i - 1]){
//       return false;
//     }
    
//   }
//     return true;
// }

let div1 = document.querySelector('.content');
let button1 = document.querySelector('button');
button1.onclick = function() {
  div1.textContent = 'Hello World';
};