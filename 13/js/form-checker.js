function FormChecker(sSelector) {
    var f = this;
    f.form = $(sSelector);
    f.textFields = f.form.find(".b-textfield");
    f.errorMessage = f.form.find(".b-form__message_error");

    f.check = function (event) {
        event.preventDefault();
        var formError = false;
        f.textFields.each(function () {
            formError = f.checkTextField($(this));
        });
        var slideToggle = formError ? 'slideDown' : 'slideUp';
        f.errorMessage.stop()[slideToggle]();
    };

    f.checkTextField = function (textField) {
        var currentTextField = textField.length ? textField : $(this),
            regexps = settings.get("regexps"),
            re = new RegExp(regexps[currentTextField.attr('name')]),
            textFieldError = !currentTextField.val().match(re);
        currentTextField.toggleClass('b-textfield_error', textFieldError);
        return textFieldError;
    };

    f.form.submit(f.check);
    f.textFields.blur(f.checkTextField);
}