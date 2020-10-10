// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
//     uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
// };
// 4.1
// alert(`Hi there, this is dev dictionary`);
// let userInput = prompt('Enter a keyword');
// if (userInput == 'debug' || userInput == 'done' || userInput == 'defect' || userInput == 'pm' || userInput == 'uiux'){
//     alert(`${userInput} : ${dictionary[userInput]}`);
// }
// else {
//     alert(`We could not find your word : ${userInput}`);
// }

//4.2
// alert(`Hi there, this is dev dictionary`);
// let userInput = prompt('Enter a keyword');
// if (userInput == 'debug' || userInput == 'done' || userInput == 'defect' || userInput == 'pm' || userInput == 'uiux'){
//     alert(`${userInput} : ${dictionary[userInput]}`);
// }
// else {
//     let a = prompt(`We could not find your word : ${userInput}, please leaves your explanation`);
//     dictionary[userInput] = a;
//     let b = prompt(`Enter a key word`);
//     alert(`${b} : ${dictionary[b]}`);
// }



// 5
let phone1 = {
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 428,
    color: 'White',
    category: 'Charger',
};
let phone2 = {
    name: 'VSmart Active 1',
    brand: 'Vsmart',
    price: 5487,
    color: 'Black',
    category: 'Phone',
};
let phone3 = {
    name: 'IPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'Gray',
    category: 'Phone',
};
let phone4 = {
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: 8490,
    color: 'Blue',
    category: 'Phone',
};
let phone = [];
phone.push(phone1);
phone.push(phone2);
phone.push(phone3);
phone.push(phone4);

//5.1
// for (let i = 0; i < phone.length; i++){
//     console.log(`Name: ${phone[i].name}`);
//     console.log(`Price: ${phone[i].price}`);
//     console.log(`------------------------`);
// }

//5.2
// let a = Number(prompt(`Enter product position`));
// a = a - 1;
// for (let i = 0; i < phone.length; i++){
//     if (i == a){
//         for (let x in phone[i]){
//             console.log(`${x}: ${phone[i][x]}`);
//         }
//     }
// }

//5.3
// let a = prompt(`Enter your category`);
// for (let i = 0; i < phone.length; i++){
//     if (a == phone[i].category){
//         console.log(`Name: ${phone[i].name}`);
//         console.log(`Price: ${phone[i].price}`);
//         console.log(`--------------`);
//     }
// }

//5.4
phone1.providers = 'Phu kien Zero, Dien tu cc';
phone2.providers = 'Tgdd, Ddghn, VhStore';
phone3.providers = 'Tgdd';
phone4.providers = 'Tgdd';
// for (let i = 0; i < phone.length; i++){
//         console.log(`Name: ${phone[i].name}`);
//         console.log(`Price: ${phone[i].price}`);
//         console.log(`Providers: ${phone[i].providers}`);
//         console.log(`------------------------`);
//     }

//5.5










