'use strict'

//async & wait for
//clear style of using promise object

//1. async

// function fetchUser(){
//     // do network request in 10 secs...
//     return new Promise(function(resolve, reject){
//         resolve('Moonsoo') ;
//     });
// }//This is same as below box

async function fetchUser(){
    return 'Moonsoo';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2.await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getAngry(){
    await delay(2000);
    //throw 'error';
    return '😴';
}

async function getSmile(){
    await delay(1000);
    return '😀';
}

// function getEmoji(){
//     return delay(3000) 
//     .then(()=>'😀');
// }


async function pickEmoji(){
    const angryPromise = getAngry();
    const smilePromise = getSmile();
    const angry = await angryPromise;
    const smile = await smilePromise;
    return `${angry}+${smile}`
}
// function pickEmoji(){
//     return getAngry().then (angry => {
//         return getSmile().then(smile => `${angry} + ${smile}`);
//     });
// }
pickEmoji().then(console.log);

// 3. useful Promise APIs

function pickAllEmojis(){
    return Promise.all([getAngry(), getSmile()]).then(emojis => 
        emojis.join('||')
    );

}
pickAllEmojis().then(console.log);

function pickOneEmojis(){
    return Promise.race([getAngry(), getSmile()]);
}
pickOneEmojis().then(console.log);