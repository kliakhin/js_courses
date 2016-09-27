function myFunction() {
    var form = document.getElementById("form1");
    var num1 = parseInt(form.elements[0].value);
    var num2 = parseInt(form.elements[1].value);
    document.getElementById("sum").innerHTML = sum(num1, num2);
    console.log(parseFloat("25345.4"));
    console.log(parseInt("25345.4"));
}
function myFunction2() {

}

function sum(a, b) {
    return a + b;
}


function square(a, b, c) {
    return a;
}


console.log(parseFloat("25345.4"));
console.log(parseInt("25345.4"));

//encodeURI(uri)
//decodeURI(uri)

function birthdayData() {
    var today = new Date(),
        day = String(today.getDate()).length < 2 ? "0" + today.getDate() : today.getDate(),
        month = String(today.getMonth() + 1).length < 2 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1,
        dayMonth = day + "." + month,
        friends = {
            "22.09" : "Cate, Vanya",
            "23.09" : "Misha"
        };

        if (friends[dayMonth]) {
            console.log(friends[dayMonth] + " " + (friends[dayMonth].length > 5 ? "have" : "has") + " birthday today!");
        }
    console.log(dayMonth);
}
//birthdayData();
function myFunction3() {
    var form = document.getElementById("form2"),
        productName = form.elements[0].value,
        weight = form.elements[1].value;
    document.getElementById("cals").innerHTML = productName + " " + weight + " = " + getCals(productName, weight) + "; 100 = " + getCals(productName, 100);
    console.log(getCals(productName, weight));
    console.log(getCals(productName, weight));
}

function getCals(foodName, weight) {
    var products = {
        "Kasha1": 98.7,
        "Kasha2": 18.7,
        "Kasha3": 78.7
    };
    var cals = 5;
    return weight / 100 * products[foodName];
}


function getIMT(sex, weight, height) {
    var coeff = {
        "male"      : [100, 1.15],
        "female"    : [110, 1.15]
    };
    console.log("Ideal weight = " + (height - coeff[sex][0]) * coeff[sex][1]);
}
getIMT("female", 90, 195);








