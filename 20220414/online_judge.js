// 'use strict'

const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const input = [];

rl.on('line', line => {input.push(line.split(''));}).on('close',()=>{
    const A =parseInt(input[0][0]);
    const B =parseInt(input[0][1]);

    if(A>B){
        console.log('>');
    }else if(A<B){
        console.log('<');

    }else if(A===B){
        console.log('==');
    }

})