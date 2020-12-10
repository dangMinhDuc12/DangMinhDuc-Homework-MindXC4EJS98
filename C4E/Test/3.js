let input = document.querySelector("input");
let button = document.querySelector("button");
let i = 0;
button.onclick = function () {
  let number = 5;
  let inputUser = input.value;
  i++;
  if (inputUser < 0 || inputUser > 10) {
    input.value = "";
    i = 0;
    alert("Bạn đã nhập sai mời bạn nhập lại số từ 0 đến 10");
  } else {
    if (inputUser == number) {
      alert("Chúc mừng bạn đã đoán đúng");
    }
    if (inputUser != number) {
      input.value = "";
      if (i >= 3) {
        alert(`Bạn đã đoán đủ 3 lần kết quả là ${number}`);
      }
      if (i < 3) {
        inputUser = "";
        alert(`Bạn đã đoán sai mời bạn nhập lại`);
      }
    }
  }
};
