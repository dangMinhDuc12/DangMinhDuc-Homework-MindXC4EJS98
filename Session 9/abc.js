ul.onclick = function () {
  console.log("ok");
};
button1.onclick = function (e) {
  e.stopPropagation(); // ngan chan su kien noi bot
  console.log("button 1");
};
