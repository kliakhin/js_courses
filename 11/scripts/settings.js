var settings = {};

settings.data = {};

settings.init = function (oSettings) {
    settings.data = oSettings;
};

settings.get = function (eSettings) {
    return settings.data[eSettings];
};