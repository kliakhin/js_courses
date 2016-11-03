function Component() {

    this.init = function (sSelector) {
        this.elem = $(sSelector);
        if (!this.elem.length) {
            console.error("Can't create 'elem' " + sSelector)
        }
    };

    this.find = function (sSelector) {
        var object = this.elem.find(sSelector);
        if (!object.length) {
            console.log("Can't create 'object' " + sSelector);
        }
        return object;
    }
}

