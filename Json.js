'use strict'
 //AJAX ; Asynchronous JavaScript And XML

 //*Json*
//  Simplest data interchange format 
//  lightweight text-based structure
//  easy to read andkey-value pairs
//  used for serialization and transmission of data between the network the net-
//  work connection
//  independent programming language and plaform

//1. Object to Json 
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify((['apple', 'banana'] ));
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

// json = JSON.stringify(rabbit, (key,value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return key === 'name' ? 'ellie' : value;
// });

console.log(json);
//2. Json to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
// rabbit.jump();
//obj.jump();
