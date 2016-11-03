/**
 * Created by Yevgen.Kliakhin on 10/25/2016.
 */
function Events(sSelector) {
    var e = this;

    e.init(sSelector);

    e.coordX = e.find(".b-pad__coord_x");
    e.coordY = e.find(".b-pad__coord_y");
    e.target = e.find(".b-pad__coord_target");
    e.coordXrel = e.find(".b-pad__coord_x-relative");
    e.coordYrel = e.find(".b-pad__coord_y-relative");
    e.keyinfo = e.find(".b-pad__coord_keyinfo");
    e.text = e.find(".b-pad__text");

    e.showCoords = function (event) {
        e.coordX.html(event.pageX);
        e.coordY.html(event.pageY);
        e.target.html($(event.target).attr('class'));
        e.coordXrel.html(event.pageX - e.elem.position().left);

        e.coordYrel.html(event.pageY - e.elem.position().top);
    };

    e.clickPad = function (event) {

        console.log('ClickPad');
    };

    e.clickX = function (event) {
        console.log("clickXxxxxx");
        event.stopPropagation();
    };

    e.showKeyInfo = function (event) {
        e.keyinfo.html(
            event.which + ' '
            + event.ctrlKey + ' '
            + event.altKey + ' '
            + event.shiftKey + ' '
        );
    };


    e.elem.mousemove(e.showCoords);

    e.coordX.click(e.clickX);

    e.text.keydown(e.showKeyInfo);

    e.elem.click(e.clickPad);
}

Events.prototype = new Component();
