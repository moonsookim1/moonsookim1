"use strict";

//JavaScript is synchronous.
//Excute the code block by orger after hoisting.
//hoisting : var, function declaration, function
// console.clear();
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
// console.log(2);
console.log("3");

// Synchronous callbacks

function printImemdiately(print) {
  print();
}

printImemdiately(() => console.log("hello"));

// Asynchronous callbacks
function printImemdiately(print, timeout) {
  setTimeout(print, timeout);
}
printImemdiately(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
    }
  
    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === 'ellie') {
          onSuccess({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }
  
  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your passrod');
  userStorage.loginUser(
    id,
    password,
    user => {
      userStorage.getRoles(
        user,
        userWithRole => {
          alert(
            `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
          );
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );

  
