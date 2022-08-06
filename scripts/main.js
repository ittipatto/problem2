var ansSum = 0;
var ansAvg = 0;
const list = [];
var min = 0;
var max = 0;
loopVar:for (;;) {
    var text = prompt('Enter a positive integer (a negative integer to quit)');
    Int:for(;;){
        if (/^[-+]?(\d+|Infinity)$/.test(text)) break Int;
        else continue loopVar;
    }
    var n = Number(text);
    // problem
    if (!isNaN(n)&&n>0) {
        list.push(n);
        continue loopVar}
        // 
    else if(!isNaN(n)&&n<0) break loopVar;
    
}
function showlist(list) {
    if (list.length==0) {
        alert('For the list that is empty, the average is ' + ansAvg +' the minimum is '+ min +' and the maximum is '+ max);
    } else {
        avg(list)
        minimum(list)
        maximum(list)
        alert('For the list '+ list +' the average is ' + ansAvg +' the minimum is '+ min +' and the maximum is '+ max);
    }
}

function avg(list) {
    for (let i =0;i<list.length;i++) {
        if (isNaN(list[i])){
            break;
        } else
        ansSum += list[i];
        continue;
    }
    ansAvg = ansSum/list.length;
    return ansAvg,ansSum;
}

function minimum(list) {
    min = Math.min.apply(Math,list);
    return min;
}

function maximum(list) {
    max = Math.max.apply(Math,list);
    return max;
}

showlist(list)
