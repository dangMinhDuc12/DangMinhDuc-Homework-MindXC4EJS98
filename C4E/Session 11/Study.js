//Cach 1
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise is the best");
//   }, 5000);
// });

// promise.then(function (success) {
//   console.log(success);
// });

//Cach 2
function second(s) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, s);
  });
}

async function promise() {
  await second(5000);
  console.log(`Promise is the best`);
}
promise();
