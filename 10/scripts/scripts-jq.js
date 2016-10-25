function Menu(sSelector) {

    var m = this;

    m.menu = $(sSelector);
    m.menuItem = m.menu.find("li");

    m.showSubMenu = function () {
        //$(this).children(".b-submenu").show();
        //$(this).children(".b-submenu").addClass("b-submenu_shown");
        //$(this).children(".b-submenu").stop().slideDown();
        $(this).children(".b-submenu")
            .stop()
            .css("display", "block")
            .animate({"opacity": 1, "backgroundColor": "red"}, 500);
    };

    m.hideSubMenu = function () {
        //$(this).children(".b-submenu").hide();
        //$(this).children(".b-submenu").removeClass("b-submenu_shown");
        //$(this).children(".b-submenu").stop().slideUp();
        $(this).children(".b-submenu")
            .stop()
            .css("display", "block")
            //background: none repeat scroll 0 0 #EEEEEE;
            //.css("background", "red")
            .animate({"opacity": 0, "backgroundColor": "white"}, 500, function () {
                $(this).css("display", "none");
            });

    };

/*
    m.menuItem.mouseover(m.showSubMenu)
        .mouseout(m.hideSubMenu);
*/

    m.showHideSubMenu = function (event) {
        event.preventDefault();
        $(this).children(".b-submenu").stop().slideToggle();
    };

    m.menuItem.click(m.showHideSubMenu)
}