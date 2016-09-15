var array = [];

for (var i = 0; i < 10; i++) {
    array.push("Element#" + i);
}

array.forEach(function (item) {
        console.log(item);
    }
);

var list = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

list.forEach(function (item) {
    console.log(item);
});

var obj = {"one": 1, "two": 2, "three": 3};

console.log(obj.one);


var arr = [{
    "id": "10",
    "class": "child-of-9"
}, {
    "id": "11",
    "class": "child-of-10"
}, {
    "id": "12",
    "class": "child"
}];

for (var i = 0; i < 10; i++) {
    var obj = {
        "id": "new" + i,
        "class": "new class" + i
    };
    arr.push(obj);
}
/*for (var i = 0; i < arr.length; i++) {
 document.write("<br><br>array index: " + i);
 var obj = arr[i];
 for (var key in obj) {
 var value = obj[key];
 document.write("<br> - " + key + ": " + value);
 }
 }*/

/*for (var i = 0; i < 100; i++) {
 if (i % 2 == 0) {
 document.write("<b style='background-color: aqua'>" + i + "; </b>");
 } else {
 document.write("<b style='background-color: red'>" + i + "; </b>");
 }
 }*/
var table = "<table class='table table-striped'>" +
    "<tr>" +
    "<th>Surname</th>" +
    "<th>Evaluation</th>" +
    "</tr>";

var students = {
    "Petrov": 5,
    "Sidorow": 6,
    "Ivanov": 12,
    "Tutkin": 9,
    "Utkin": 4,
    "Medvedev": 11,
};

for (item in students) {
    table += "<tr><th>" + item + "</th>" + "<th>" + students[item] + "</th></tr>";
}
table += "</table>";
document.getElementById("table").innerHTML = table;

var goodsExt = {
    "ASD734": {
        "title": "titleName",
        "brand": "brandName"
    }, "ASD735": {
        "title": "titleName",
        "brand": "brandName"
    }, "ASD736": {
        "title": "titleName",
        "brand": "brandName"
    }
};
var table = "<table class='table table-striped'>" +
    "<tr>" +
    "<th>Id</th>" +
    "<th>Title</th>" +
    "<th>Brand</th>" +
    "</tr>";

document.write("<br>");
for (var goodsId in goodsExt) {
    table += "<tr><th>" + goodsId + "</th>" + "<th>" + goodsExt[goodsId]["title"] + "</th>" + "<th>" + goodsExt[goodsId]["brand"] + "</th></tr>";
}

table += "</table>";
document.getElementById("table2").innerHTML = table;









