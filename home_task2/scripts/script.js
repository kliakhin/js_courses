var arrayStr = "";
var array = initArray();
var even = 0,
    average = 0,
    sumEven = 0,
    sumOdd = 0;
index = 0;
sumExtreme = array[0] + array[array.length - 1];
for (i in array) {
    item = array[i];
    average += item;
    if (item % 2 == 0) {
        even++;
    }
    if (index % 2 != 0) {
        sumEven += item;
    } else if (item < sumExtreme) {
        sumOdd += item;
    }
    index++;
}
average /= array.length;
writeResult();
function initArray() {
    var array = [];
    var count = 100;
    for (var i = 0; i < count; i++) {
        array[i] = Math.floor(Math.random() * 10);
        if (array[i] == 0) {
            array[i] += 1;
        }
        var suffix = "";
        if ((i + 1) % 10 == 0) {
            suffix = ", " + "<br>";
        } else {
            suffix = ", ";
        }
        if (i == count - 1) {
            suffix = "; " + "<br>";
        }
        arrayStr += array[i] + suffix;
    }
    return array;
}

function writeResult() {
    document.getElementById("array").innerHTML = "<h3>" + arrayStr + "</h3>";
    document.getElementById("even").innerHTML = "<h3>" + even + "</h3>";
    document.getElementById("average").innerHTML = "<h3>" + average + "</h3>";
    document.getElementById("sumEven").innerHTML = "<h3>" + sumEven + "</h3>";
    document.getElementById("sumOdd").innerHTML = "<h3>" + sumOdd + "</h3>";
}

