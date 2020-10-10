let user1 = {
    name: 'Duc',
    phone: 123456789,
};
let user2 = {
    name: 'Quan',
    phone: 987654321,
};


let arrUser = [];
arrUser.push(user1);
arrUser.push(user2);



while (true) {
let input = prompt('C/R/U/D/E');
if (input == 'C'){
    let b = prompt('Nhap ten');
    let c = prompt('Nhap phone');
    let user3 = {};
    user3.name = b;
    user3.phone = c;
    arrUser.push(user3);
    
    
}

else if (input == 'R'){
    for (let i= 0; i < arrUser.length; i++){
        console.log(`name: ${arrUser[i].name}`);
        console.log(`phone: ${arrUser[i].phone}`);

    }

}

else if (input == 'U'){
    let d = prompt('Nhap ten ban muon thay doi');
    let tg;
    for (let i = 0; i < arrUser.length; i++){
        if (d === arrUser[i].name){
            let e = prompt('nhap so phone');
            arrUser[i].phone = e;
            tg = true;
            break;

        }
        else {
            
            tg = false;
        }
    }
    if (tg == false){
        alert(`${d} khong co trong du lieu`);
    }
}
else if (input == 'D'){
    let f = prompt('Nhap ten muon xoa');
    let tg;
    for (let i = 0; i < arrUser.length; i++){
        if (f == arrUser[i].name){
            arrUser.splice(i, 1);
            tg = true;
            break;
        }
        else {
            tg = false;
        }
    }
    if (tg == false){
        alert(`${f} khong co trong csdl`);
    }

}
else if (input == 'E'){
    break;
}
else {
    alert('Lenh khong hop le vui long thu lai');
}
}