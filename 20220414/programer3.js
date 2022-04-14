'use strict'
function solution(new_id) {
    var tempId = new_id;
    tempId = tempId.toLowerCase(); //1step
    tempId = tempId.replace(/[^\-\_\.a-z0-9]/g,''); //2step
    tempId = tempId.replace(/\.\.+/g,'.'); //3step
    tempId = tempId.replace(/^\.|\.$/g,''); //4step
    tempId = tempId === ''? 'a':tempId;//5step
    tempId = tempId.length >= 16? tempId.slice(0,15).replace(/\.$/g,''):tempId;//6step
    //7step
    if(tempId.length == 1){
        tempId = tempId+tempId+tempId;
    }else if(tempId.length == 2){
        tempId = tempId+tempId[tempId.length-1];
    }
    return tempId;
}
