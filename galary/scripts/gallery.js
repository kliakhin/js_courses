/**
 * Created by Yevgen.Kliakhin on 10/27/2016.
 */
function Gallery(sSelector) {

    var g = this;

    g.init(sSelector);

    g.pictures = g.find(".b-picture");
    g.arrowPrew = g.find(".b-preview__arrow_prev");
    g.arrowNext = g.find(".b-preview__arrow_next");
    g.preview = g.find(".b-preview");
    g.previewImage = g.find(".b-preview__image");
    g.previewText = g.find(".b-preview__text");
    g.current = null;
    g.max = g.pictures.length;
    g.previewContent = g.find(".b-preview__image");

    g.showPreview = function () {
        var picture = $(this);
        g.display(picture);
        g.current = g.pictures.index(picture);
    };
    g.closePreview = function (event) {
        if (!event || $(event.target).hasClass("b-preview")) {
            g.preview.removeClass("b-preview_shown");
        }
    };
    g.showImage = function (iShift) {
        g.current += iShift;
        if (g.current >= g.max) {
            g.current = 0;
        } else if (g.current < 0) {
            g.current = g.max - 1;
        }
        g.display(g.find(".b-picture:eq(" + g.current + ")"));
    };
    g.display = function (oPicture) {
        var smallImage = oPicture.find(".b-picture__image"),
            bigImage = smallImage.attr("src").replace("small_", "");
        g.previewImage.attr("src", bigImage);
        g.previewText.html(smallImage.attr("alt") + g.current);
        g.preview.addClass("b-preview_shown");
    };
    g.showPrevious = function () {
        g.showImage(-1);
    };
    g.showNext = function () {
        g.showImage(1);

    };

    g.escclosePreview = function (event) {
        if (event.which == 27) {
            g.closePreview();
        } else if (event.which == 37) {
            g.showPrevious();
        } else if (event.which == 39) {
            g.showNext();
        }
    };

    g.pictures.click(g.showPreview);
    g.preview.click(g.closePreview);
    g.arrowPrew.click(g.showPrevious);
    g.arrowNext.click(g.showNext);

    $('body').keyup(g.escclosePreview);

}

Gallery.prototype = new Component();

