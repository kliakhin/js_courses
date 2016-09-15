function myFunction() {
    var form = document.getElementById("input_form");
    var curMetr = form.elements[0].value,
        preMetr = form.elements[1].value,
        costBelow = form.elements[2].value,
        costUnder = form.elements[3].value,
        debt = parseInt(form.elements[4].value),
        byHimself = form.elements[5].checked,
        average = form.elements[6].value;
    var sum = 0.0,
        diff;

    if (byHimself || (curMetr != "" || preMetr != "")) {
        diff = curMetr - preMetr;
        if (costBelow != "" && costUnder != "") {
            if (diff <= 100) {
                sum = diff * costBelow;
            } else {
                sum = (100 * costBelow) + (diff - 100) * costUnder;
            }
        } else if (costBelow == "") {
            document.getElementById("info").innerHTML = "Info = " + "Enter costBelow!";
        } else if (costUnder == "") {
            document.getElementById("info").innerHTML = "Info = " + "Enter costUnder!";
        }

    } else {
        if (average != "") {
            sum = average;
        } else {
            document.getElementById("info").innerHTML = "Info = " + "Please, Enter average!";
        }
    }
    if (debt != 0) {
        sum = sum + debt;
    }
    document.getElementById("result").innerHTML = "SUM = " + sum + " uan.";
}