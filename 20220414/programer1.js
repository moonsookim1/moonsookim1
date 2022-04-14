'use strict'
function solution(id_list, report, k) {
    var answer = [], suspend = [];
    for(let i=0; i<id_list.length; i++) {
        answer.push(0);
        suspend[i] = new Set();
    }
    return answer;

report.forEach(e=>{
    let array = e.split('');
    suspend[id_list.indexOf(array[1])].add(array[0]);
});

suspend.forEach(e=>{
    if(e.size>=k) e.forEach(a => ++answer[id_list.indexOf(a)]);
});

return answer;
}