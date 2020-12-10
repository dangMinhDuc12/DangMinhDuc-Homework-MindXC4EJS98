let f1 = {
    name: 'HTML',
    complete: false,
    square:'[]',
};
let f2 = {
    name: 'CSS',
    complete: false,
    square:'[]',
};
let f3 = {
    name: 'Basics of javascript',
    complete: false,
    square:'[]',
};
let f4 = {
    name: 'Node package manager (Npm)',
    complete: false,
    square:'[]',
};
let f5 = {
    name: 'Git',
    complete: false,
    square:'[]',
};
let f = [];
f.push(f1);
f.push(f2);
f.push(f3);
f.push(f4);
f.push(f5);

//6.1
// for (let i = 0; i < f.length; i++){
//     console.log(`${i+1}. ${f[i].name}`);
//     console.log(`Complete: ${f[i].complete}`);
   
// }

//6.2
// let a = prompt('Enter your command(new, delete, update, complete)');
// if (a == 'new'){
//     let f6 = {};
//     let b = prompt('Enter new task');
//     f6.name = b;
//     f6.complete = false;
//     f.push(f6);
// }
// for (let i = 0; i < f.length; i++){
//     console.log(`${i+1}. ${f[i].name}`);
//     console.log(`Complete: ${f[i].complete}`);
   
// }

//6.3
//  if (a == 'update'){
//     let b = Number(prompt('Enter position'));
//     b = b - 1;
//     let c = prompt('Enter new title');
//     for (let i = 0; i < f.length; i++){
//         if (i == b){
//             f[i].name = c;
//         }
//     }
// }
// for (let i = 0; i < f.length; i++){
//         console.log(`${i+1}. ${f[i].name}`);
//         console.log(`Complete: ${f[i].complete}`);
       
//     }

//6.4

// if (a == 'complete'){
//     let b = Number(prompt('Enter position'));
//     b = b - 1;
//     for (let i = 0; i < f.length; i++){
//         if (i == b){
//             f[i].complete = true;
//         }
//     }
// }
// for (let i = 0; i < f.length; i++){
//             console.log(`${i+1}. ${f[i].name}`);
//             console.log(`Complete: ${f[i].complete}`);
           
//         }

//6.5

// if (a == 'delete'){
//     let b = Number(prompt('Enter position you want to delete'));
//     b = b - 1;
//     for (let i = 0; i < f.length; i++){
//         if (i == b){
//             f.splice(i, 1);
//         }
//     }
// }
// for (let i = 0; i < f.length; i++){
//                 console.log(`${i+1}. ${f[i].name}`);
//                 console.log(`Complete: ${f[i].complete}`);
               
//             }



//6.6
let a = prompt('Ban da hoc xong bai nao');

for (let i = 0; i < f.length; i++){
        if (a == f[i].name){
            f[i].square = '[x]';
        }
        console.log(`${i+1}. ${f[i].square} ${f[i].name}`);
        

}
