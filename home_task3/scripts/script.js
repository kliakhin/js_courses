function myFunction() {
    var arraySize = parseInt(document.getElementById("size").value),
        array = initArray(arraySize),
        arrayOut = prepareArray(array),
        max = Math.max.apply(Math, array),
        pairs = pairs(array),
        negative = negative(array),
        product = product(array);

    writeResult();
    function initArray(arraySize) {
        var array = [],
            count = arraySize;
        for (var i = 0; i < count; i++) {
            array.push(Math.floor(Math.random() * 10));
            if (array[i] == 0) {
                array[i] += 1;
            }
        }
        return array;
    }

    function writeResult() {
        document.getElementById("array").innerHTML = "<h3>" + arrayOut + "</h3>";
        document.getElementById("max").innerHTML = "<h3>" + max + "</h3>";
        document.getElementById("pairs").innerHTML = "<h3>" + pairs + "</h3>";
        document.getElementById("negative").innerHTML = "<h3>" + negative + "</h3>";
        document.getElementById("product").innerHTML = "<h3>" + product + "</h3>";
        document.getElementById("output").style.display = "initial";
    }

    function pairs(array) {
        var index = 0;
        var array_local = array.slice(0);
        if (array_local.length > 0) {
            while (array_local[index + 1] != null) {
                array_local[index + 1] += array_local[index];
                array_local[index] = array_local[index + 1] - array_local[index];
                array_local[index + 1] -= array_local[index];
                index += 2;
            }
        }
        return prepareArray(array_local);
    }

    function negative(array) {
        var array_local = array.slice(0);
        array_local.forEach(function (item, index) {
            if (!(index % 2)) {
                array_local[index] = item * (-1);
            }
        });
        return prepareArray(array_local);
    }

    function product(array) {
        var array_local = array.slice(0);
        array_local.forEach(function (item, index) {
            if (!((index + 1) % 3)) {
                array_local[index] = item * array_local[index - 1];
            }
        });
        return prepareArray(array_local);
    }

    function prepareArray(array) {
        var arrayStr = "";
        for (var i = 0; i < array.length; i++) {
            var suffix = "";
            if (!(i + 1 % 50)) {
                suffix = ", " + "<br>";
            } else {
                suffix = ", ";
            }
            if (i == array.length - 1) {
                suffix = "; " + "<br>";
            }
            arrayStr += array[i] + suffix;
        }
        return arrayStr;
    }
}