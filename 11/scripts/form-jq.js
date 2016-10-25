/**
 * Created by Yevgen.Kliakhin on 10/6/2016.
 */

function Form(sSelector) {
    var f = this;
    f.form = $(sSelector);
    f.name = f.form.find(".b-form__name");
    f.surname = f.form.find(".b-form__surname");
    f.seasons = f.form.find(".b-form__season");
    f.fruit = f.form.find(".b-form__fruit");
    f.animal = f.form.find(".b-form__animals");
    f.review = f.form.find(".b-form__review");

    f.showInfo = function () {
        console.log(f.getValue(f.name),
            f.getValue(f.surname),
            f.seasons.filter(":checked").length ?
                f.getValue(f.seasons.filter(":checked"), ", ")
                : "",
            f.getValue(f.fruit.filter(":checked")),
            f.getValue(f.animal),
            f.getValue(f.review)
        );
    };

    f.getValue = function (oElem, sSeparator) {
        var type = oElem.attr("type"),
            tagName = oElem.prop("tagName");

        if (type == "text" || type == "password" ||
            type == "radio" || tagName == "TEXTAREA" ||
            tagName == "SELECT") {
            return oElem.val();
        } else if (type == "checkbox") {
            var checkBoxes = "";
            oElem.each(function () {
                if (checkBoxes) {
                    checkBoxes += sSeparator;
                }
                checkBoxes += $(this).val();
            });
            return checkBoxes;
        } else {
            alert("We don't have this element of control ")
        }
    };

    f.changeLang = function (event) {
        event.preventDefault();
        var currentLang = $(this).data("lang");
        $.each(settings.get("langs"), function (className, langsData) {
            var currentElem = f.form.find("." + className),
                type = currentElem.attr("type");
            if (type != "button") {
                currentElem.html(langsData[currentLang]);
            } else {
                currentElem.val(langsData[currentLang]);
            }
        });


    };


    $(".b-form__ok-button").click(f.showInfo);
    $("a").click(f.changeLang);

}


