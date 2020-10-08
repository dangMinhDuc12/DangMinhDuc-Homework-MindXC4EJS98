// tinh tong chuoi nhap vao

// let a = prompt('Enter a squence of Number, separated by commas (,)');
// let b = a.split(',');
// let sum = 0;
// for (let i = 0; i < b.length; i++){
//     sum = sum + Number(b[i]);
// }
// alert(`The sum of them is ${sum}`);


// tim so nho nhat
// let a = prompt('Enter a squence of Number, separated by commas (,)');
// let b = a.split(',');
// let min = Number(b[0]);
// for (let i = 0; i < b.length; i++){
//     if (b[i] < min){
//         min = b[i];
//     }
// }
// alert(`The smallest number is ${min}`);

// tim kiem so trong mang
// const b = [3, 4, 6, -9, 10, -88, 2];
// let a = Number(prompt('Enter a Number'));
// let tg;

// for (let i = 0; i < b.length; i++){
//     if (a == b[i]){
//         tg = true;
//         alert(`${a} is FOUND in my array at index ${i+1}`);
//         break;
        
//     }
//     else{
//         tg = false;
//     }
    
// }
// if (tg == false){    
//     alert(`${a} is NOT found in my array`);
// }


//  dan cuu
// let a = [5, 7, 300, 90, 24, 50, 75];

// console.log("Hello my name is Duc, here is my Sheep sizes:");
// console.log(...a);

// tim max dan cuu
// console.log(`Now my biggest sheep has sizes ${Math.max(...a)}; let's shaves it`); // Math.max(...array) la tim max cua chuoi; Math.min(...array) la tim min cua chuoi

// a[a.indexOf(300)] = 8; // indexOf la ham tim index cua 1 phan tu trong mang
// console.log("After shearing, here is my flock");
// console.log(...a);

// let b = a.map(function(value, index){
//     return value = value + 50;
// })
// console.log('One month has, passed, my sheeps have grown, here are there sizes');
// console.log(...b);
// let sum = 0;
// for (let i = 0; i < b.length; i++){
//     sum = sum + b[i];
// }
// console.log(`My flock has size in total ${sum}
// I would get ${sum} * 2$ = ${sum*2}`);


