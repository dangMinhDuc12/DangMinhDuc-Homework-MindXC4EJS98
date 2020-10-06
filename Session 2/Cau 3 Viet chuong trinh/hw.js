// dieu kien long nhau
let a = Number(prompt("nhap vao chieu cao (cm)"));
if (a < 150){
    console.log("thap");
}
else if (a >=150 && a <=180){
    console.log("trung binh");
}
else{
    console.log("cao");
}

// tinh chi so BMI
let h = Number(prompt("nhap vao chieu cao (cm)"));
let w = Number(prompt("nhap vao can nang (kg)"));
let h1 = h/100;
let BMI = w/(h1*h1);
if (BMI < 16){
    console.log("thieu can nang tram trong");
}
else if (BMI >= 16 && BMI < 18.5){
    console.log("thieu can");
}
else if (BMI >= 18.5 && BMI < 25){
    console.log("binh thuong");
}
else if (BMI >= 25 && BMI < 30){
    console.log("hoi qua can");
}
else{
    console.log("beo phi");
}

// tinh tich cac so
let n = Number(prompt("nhap n"));
let S = 1;
for(let i = 1; i <= n; i++){
    S = S * i;
    
}
console.log(S);