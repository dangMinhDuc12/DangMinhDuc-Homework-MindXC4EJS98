// khoi tao mot mang co chua ten phim yeu thich
// let mv = ['Tao Quan', 'Ve Nha Di Con', 'Nguoi Phan Xu', 'Nhung Co Gai Trong Thanh Pho'];
// console.log(mv);

// Them phim moi vao mang, phim moi do nguoi dung nhap
// let i = prompt('nhap ten phim');
// mv.push(i);
// console.log(mv);

// doc ten phim o vi tri thu i , i do nguoi dung nhap
// let i = Number(prompt('nhap vi tri'));
// console.log(mv[i]);

// cap nhat ten phim o vi tri dau tien, ten phim do nguoi dung nhap
// let i = prompt('nhap ten phim');
// mv[0] = i;
// console.log(mv);

// cap nhat ten phim o vi tri thu i, i va ten phim do nguoi dung nhap
// let a = Number(prompt('nhap vi tri'));
// let b = prompt('nhap ten phim');
// mv[a] = b;
// console.log(mv);

// xoa 1 muc o vi tri i , i do nguoi dung nhap
// let i = Number(prompt('nhap i'));
// mv.splice(i, 1);
// console.log(mv);

// xoa n muc o vi tri i , i va n do nguoi dung nhap
// let i = Number(prompt('nhap vi tri i'));
// let n = Number(prompt('nhap so muc can xoa n'));
// mv.splice(i, n);
// console.log(mv);

// in tat ca movies ra tab console
// for (let i = 0; i < mv.length; i++){
//     console.log(mv[i]);
// }

// in mot nua ten phim cua mang ra tab console
// for (let i = 0; i < mv.length/2; i++){
//     console.log(mv[i]);
// }

// in ten phim theo thu tu ra tab console
// for (let i = 0; i < mv.length; i++){
//     console.log(`${i+1}. ${mv[i]}`);
// }

// doi tat ca ten phim thanh chu thuong
// for (let i = 0; i < mv.length; i++){
//     mv[i] = mv[i].toLowerCase();
// }
// console.log(mv);

// dung vong lap khi nguoi dung nhap vao mang duoi 15 ki tu
// while (true){
//     let n = prompt('nhap ten');
//     if (n.length <= 15){
//         console.log('ten tot');
//         break;
//     }
//     else{
//         console.log('dai qua hay go lai');
//     }
// }

// lam game giai do
// let n;
// while (true){
//     n = Number(prompt('go cau tra loi cua ban'));
//     if (n){                         // if(n) la kiem tra xem n co phai kieu du lieu so hay khong
//         if (n == 3){
//             console.log('cau tra loi dung');
//             break;
//         }
//         if (n != 3) {
//             console.log('chuc ban may man lan sau');
//             break;

//         }
//     }
//     else {
//         console.log('cau tra loi khong hop le, xin hay nhap lai');
//     }

// }

// BT them
// lay du lieu nguoi dung nhap vao va them vao 1 mang rong cac so ma nguoi dung nhap vao
// let a = Number(prompt('ban dinh nhap may so'));
// let b = [];
// while (true){
//     let c = Number(prompt('hay nhap vao cac so'));
//     b.push(c);
//     if (b.length == a) {
        
//         break;

//     }
// }
// console.log(b);

// sap xep tang dan
// let tg;
// for (let i = 0; i < b.length - 1; i++){
//     for (let j = i + 1; j < b.length; j++){
//         if (b[i] > b[j]){   // sap xep giam dan thi dieu kien la b[i] < b[j]
//             tg = b[i];
//             b[i] = b[j];
//             b[j] = tg;
//         }
//     }
// }
// for (i = 0; i < b.length; i++){
//     console.log(b[i]);
// }

// loc day thanh day chan, day le
// for (let i = 0; i < b.length; i++){
//     if (b[i] % 2 == 0){
//         console.log(`so chan la ${b[i]}`);
//     }
//     else{
//         console.log(`so le la ${b[i]}`);
//     }
// }




