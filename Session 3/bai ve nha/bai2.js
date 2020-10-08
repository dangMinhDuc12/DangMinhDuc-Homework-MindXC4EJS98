let b = ['Jeans', 'T-Shirt', 'Socks'];


let a = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U,D)');

if (a === 'R'){
    for (let i = 0; i < b.length; i++){
        console.log(`${i+1}. ${b[i]}`);
    }
}
if (a === 'C'){
    let c = prompt('Enter the name of the new item:');
    alert('Done');
    b.push(c);
    a = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U,D)');
    if (a === 'R'){
        for (let i = 0; i < b.length; i++){
            console.log(`${i+1}. ${b[i]}`);
        }
    }


}

if (a === 'U'){
    let d = Number(prompt('Enter the position you want to update'));
    let e = prompt('Enter the new name');
    alert('Done');
    b[d] = e;
    for (let i = 0; i < b.length; i++){
        console.log(`${i+1}. ${b[i]}`);
    }
    
    
}

if (a === 'D'){
    let f = Number(prompt('Enter the position you want to delete'));
    alert('Done');
    b.splice(f, 1);
    for (let i = 0; i < b.length; i++){
        console.log(`${i+1}. ${b[i]}`);
    }

}
else{
    alert('This command is not supported');
}
