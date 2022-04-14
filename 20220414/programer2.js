'use strict'
function solution(id_list, report, k) {
    var uniqueReport = [...new Set(report)];
    var splitUR = uniqueReport.join(" ").split(" ");
    var warned = [],result=[];
    
    //배열 초기화
    for(let i=0;i<id_list.length;i++){
        warned[i] = 0;
        result[i] = 0;
    }
    //유저가 신고된 횟수 배열에 저장
    for(let i=1;i<=splitUR.length;i=i+2){
        warned[id_list.indexOf(splitUR[i])]++;
    }
    for(let i=0;i<warned.length;i++){
        if(warned[i] >= k){
            for(let j=1;j<=splitUR.length;j=j+2){
                if(splitUR[j] === id_list[i]){
                    result[id_list.indexOf(splitUR[j-1])]++; 
                }
            }
        }
    }
        return result;
    }
   