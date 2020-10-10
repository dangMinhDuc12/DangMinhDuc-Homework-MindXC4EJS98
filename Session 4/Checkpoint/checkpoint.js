// let movie = {
//     title: 'The dark knight rise',
//     year: 2012,
//     rate: 8.4,
// };

// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);
// console.log(movie.director);

// Read
// let a = prompt('What you want to know');
// if (movie[a] == undefined){
//     alert(`${a} does not exist in our data`);
// }
// else{
//     alert(movie[a]);
// }

// Update
// movie.rate = 8.7;
// console.log(movie.rate);
// movie.rate = movie.rate + 0.5;
// console.log(movie.rate);

// let a = prompt('What you want to update');
// let b = prompt('what is the update');
// movie[a] = b;
// console.log(movie);

// Creat
// let a = prompt('what you want to update')
// alert(`${a} does not exist in our data, we will add new`);
// let b = prompt('Enter the new data');
// movie[a] = b;
// console.log(movie);

// Array of object
// let movie1 = {
//     title: 'The dark knight rise',
//     year: 2012,
//     rate: 8.2,
// };
// let movie2 = {
//     title: 'Batman',
//     year: 2013,
//     rate: 8.3,
// };
// let movie3 = {
//     title: 'Hulk',
//     year: 2014,
//     rate: 8.4,
// };

// let movie = [];
// movie.push(movie1);
// movie.push(movie2);
// movie.push(movie3);
// console.log(movie);
// console.log(movie[0]);
// console.log(movie[2].title);
// for (let i = 0; i < movie.length; i++){
//     console.log(movie[i]);

// }
// for (item in movie){                // for in la in ra index
//     console.log(item);
// }
// for (item of movie){                   // for of la in ra item cua array
//     console.log(item);
// }
// for (let i = 0; i < movie.length; i++){
//     console.log(movie[i].title);
//     console.log(`Year : ${movie[i].year}`);
//     console.log(`Rate: ${movie[i].rate}`);

// }

// let obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
// };

// for (let prop in obj){                   
//     console.log(prop);  // vong lap in ra property cua obj
//     console.log(obj[prop]); // in ra item cua obj
// }



// Object containing array

// let movie = {
//         title: 'The dark knight rise',
//         year: 2012,
//         rate: 8.4,
//         charater: ['Batman', 'Cat woman', 'Bane'],
//     };

// // console.log(movie);
// console.log(movie.title);
// console.log(`Year : ${movie.year}`);
// console.log(`Rate: ${movie.rate}`);
// console.log(`Cast: ${movie.charater[0]}`);
// movie.charater.push('Iron man');
// console.log(movie.charater[3]);



// Mix
// let movie1 = {
//         title: 'The dark knight rise',
//         year: 2012,
//         rate: 8.2,
//     };
// let movie2 = {
//         title: 'Batman',
//         year: 2013,
//         rate: 8.3,
//     };
// let movie3 = {
//         title: 'Hulk',
//         year: 2014,
//         rate: 8.4,
//     };
    
// let movie = [];
// movie.push(movie1);
// movie.push(movie2);
// movie.push(movie3);
// for (i = 0; i < movie.length; i++){
//     console.log(movie[i].title);
//     console.log(`Year: ${movie[i].year}`);
//     console.log(`Rates: ${movie[i].rate}`);
// }



