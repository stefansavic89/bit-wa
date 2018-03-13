// 1. Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.

// 2. Modify the app so it prints an ID of the promise that is completed first.

// 3. Modify the app so it prints a message that all promises are completed.



// =========================    1     ========================== 

// for (let i = 0; i < 10; i++) {
//   let a =  Math.floor((Math.random() * 500) + 1);
//     let my2Promise = new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve('ID: ' + i + ' TimeOut: ' + a); // Yay! Everything went well!
//       },a);

//     });

//     my2Promise.then((successMessage) => {
//       console.log(successMessage);
//     });


//   }

// // =========================    2    ========================== 

// z = [];

// for (let i = 0; i < 10; i++) {

//   z.push(new Promise((resolve, reject) => {

//     setTimeout(function () {
//       resolve(i);
//     }, Math.floor((Math.random() * 500) + 1));

//   }))

// }

// Promise.race(z).then(function (value) {
//   console.log(value);
// });

// Promise.all(z).then(function (values) {
//   console.log(values);
// });


for (let i = 0; i < 10; i++) {
  let a = Math.floor((Math.random() * 5000) + 1);

  let my2Promise = new Promise((resolve, reject) => {

    let x = Math.floor((Math.random() * 2) + 1);

    if (x == 1) {
      setTimeout(function () {

        resolve('ID: ' + i + ' TimeOut: ' + a); // Yay! Everything went well!
      }, a);
    } else {

      setTimeout(function () {

        reject('ID: ' + i + ' TimeOut: ' + a + " Failed!!!"); // Nooooo! 
      }, a);

    }


  });

  my2Promise.then(
    (successMessage) => {
      console.log(successMessage);
    },
    (failMessage) => {
      console.log(failMessage);
    }
  );

  // my2Promise.catch((failMessage) => {
  //   console.log(failMessage);
  // });



}