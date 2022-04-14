"use strict";
// Promise is a JavaScript object for asynchronous operation.
//State : pending -> fulfilled or rejected.
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  console.log("doing something...");

  setTimeout(() => {
    //resolve('moonsoo');
    reject(new Error('network Unreachable'));
  }, 2000);
});

//2. Consumer : then, catch, finally, then
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
  
//   3. Promise chaining
const fetchNum = new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNum
    .then(num=> num*2)
    .then(num=> num*3)
    .then(num=> {
        return new Promise((resolve, reject)=>{
            setTimeout(() => resolve(num-1),1000);
        });
    })
    .then(num=> console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen}=>🙏`), 1000);
    setTimeout(() => reject(new Error(`error!${hen}=>🥌`)), 1000);

  });

const cook = egg =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${egg}=>🥌`), 1000);
    //setTimeout(() => resolve(`${egg}=>🥌`), 1000);

  });

getHen()
  .then(hen=>getEgg(hen))//= just (getEgg)
  .catch(error=>{
      return '😀';
  })
  .then(egg=>cook(egg))//= just (getCook)
  .then(meal => console.log(meal))//=just (console.log)
  .catch(console.log);