var ansSum = 0;
var ansAvg = 0;
var min = 0;
var max = 0;
var list;
const listn = [];
var i = 0;

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
    alert('For the list ' + (list.length == 0 ? 'that is empty' : list) + ', the average is ' + (isNaN(avg(list)) ? 0 : avg(list)) + ' the minimum is ' + (!isFinite(minimum(list)) ? 0 : minimum(list)) + ' and the maximum is ' + (!isFinite(maximum(list)) ? 0 : maximum(list)));
}

// Calculate average
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
    ansAvg = parseFloat(ansAvg).toFixed(2);
    return ansAvg;
}

// check minimum in list
function minimum(list) {
    min = Math.min.apply(Math, list);
    return min;
}

// check maximum in list
function maximum(list) {
    max = Math.max.apply(Math, list);
    return max;
}

list = readInput();
displayStats(list);