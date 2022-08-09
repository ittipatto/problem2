var ansSum = 0;
var ansAvg = 0;
var min = 0;
var max = 0;
var list;
const listn = [];
var i = 0;
// loopVar:for (;;) {
//     var text = prompt('Enter a positive integer (a negative integer to quit)');
//     Int:for(;;){
//         if (/^[-+]?(\d+|Infinity)$/.test(text)) break Int;
//         else continue loopVar;
//     }
//     var n = Number(text);
//     // problem
//     if (!isNaN(n)&&n>0) {
//         list.push(n);
//         continue loopVar}
//         // 
//     else if(!isNaN(n)&&n<0) break loopVar;
// }

// function showlist(list) {
//     if (list.length == 0) {
//         alert('For the list that is empty, the average is ' + ansAvg + ' the minimum is ' + min + ' and the maximum is ' + max);
//     } else {
//         avg(list)
//         minimum(list)
//         maximum(list)
//         alert('For the list ' + list + ' the average is ' + ansAvg + ' the minimum is ' + min + ' and the maximum is ' + max);
//     }
// }

function readInput() {
    loopVar: for (; ;) {
        var text = prompt('Enter a positive integer (a negative integer to quit)');
        Int: for (; ;) {
            if (/^[-+]?(\d+|Infinity)$/.test(text)) break Int;
            else continue loopVar;
        }
        var n = Number(text);
        // problem
        if (!isNaN(n) && n > 0) {
            listn.push(n);
            continue loopVar
        }
        // 
        else if (!isNaN(n) && n < 0) break loopVar;
    }
    return listn;
}

function displayStats(list) {
    alert('For the list that ' + (list.length == 0 ? 'is empty' : list) + ', the average is ' + (isNaN(avg(list)) ? 0 : avg(list)) + ' the minimum is ' + (!isFinite(minimum(list)) ? 0 : minimum(list)) + ' and the maximum is ' + (!isFinite(maximum(list)) ? 0 : maximum(list)));
}

function avg(list) {
    for (i; i < list.length;i++) {
        if (isNaN(list[i])) {
            break;
        } else {
            ansSum += list[i];
            continue;
        }
    }
    ansAvg = ansSum / list.length;
    return ansAvg;
}

function minimum(list) {
    min = Math.min.apply(Math, list);
    return min;
}

function maximum(list) {
    max = Math.max.apply(Math, list);
    return max;
}

// showlist(list)

list = readInput();
displayStats(list);