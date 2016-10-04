var form = $("#calc_form").html();

var num1 = $("#num1"),
    num2 = $("#num2"),
    operators = $("#operators"),
    result = $("#result"),
    error = $("#error");

$("#calc_btn").click(function () {

    num2.css({
        "boxShadow": "none",
        "color": "black"
    });
    result.val("");
    error.css("display", "none");
    if (operators.val() == "+") {
        result.val((+num1.val()) + (+num2.val()));
    } else if (operators.val() == "-") {
        result.val((+num1.val()) - (+num2.val()));
    } else if (operators.val() == "*") {
        result.val((+num1.val()) * (+num2.val()));
    } else if (operators.val() == "/") {
        if (num1.val() != 0) {
            result.val((+num1.val()) / (+num2.val()));
        } else {
            num2.css({
                "boxShadow": "0 0 3px #ff0000",
                "color": "red"
            });
            error.css("display", "inline");
        }
    } else if (operators.val() == "sqrt") {
        result.val(Math.sqrt(+num1.val()));
    }
});

$("#operators").change(function () {
    if ($("#operators").val() == "sqrt") {
        $("#num2").attr("disabled", true);
    } else {
        $("#num2").attr("disabled", false);
    }
});

