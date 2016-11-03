function MyWindow(sSelector) {

    var win = this;
    win.init(sSelector);

    win.start_countdown = win.find(".b-mywindow__start-countdown");
    win.stop_countdown = win.find(".b-mywindow__stop-countdown");
    win.start_ticker = win.find(".b-mywindow__start-ticker");
    win.stop_ticker = win.find(".b-mywindow__stop-ticker");
    win.open_window = win.find(".b-mywindow__open-window");
    win.close_window = win.find(".b-mywindow__close-window");
    win.ticket = null;
    win.countdown = null;
    win.tickerTime = 0;
    win.tickerPeriod = 2;
    win.newWindow = null;

    win.startCountdown = function () {
        var mayIStart = window.confirm("Can I start");
        if (mayIStart) {
            win.countdown = window.setTimeout(win.countdownNotification, 3000);
        } else {
            window.alert("Ok");
        }

    };
    win.stopCountdown = function () {
        window.clearTimeout(win.countdown);
        alert("Timer has been stopped");

    };
    win.startTicker = function () {

    };
    win.stopTicker = function () {

    };
    win.openWindow = function () {

    };
    win.closeWindow = function () {

    };
    win.countdownNotification = function () {
        window.alert("Time is up");
    };
    win.tickerNotification = function () {

    };

    win.start_countdown.bind("click", win.startCountdown);
    win.stop_countdown.bind("click", win.stopCountdown);
    win.start_ticker.bind("click", win.startTicker());
    win.stop_ticker.bind("click", win.stopTicker());
    win.open_window.bind("click", win.openWindow());
    win.close_window.bind("click", win.closeWindow());
}

MyWindow.prototype = new Component();