var settings = {};

// свойство которое будет хранить массив (объект)
settings.data = {};

// сохраняет данные массива в свойство settings.data
// oSettings = _page_settings
settings.init = function (oSettings) {
    settings.data = oSettings;
    console.log("данные из settings.data: ", settings.data)
};

// получает по ключу значение или набор значений settings.data
settings.get = function (sSettingsName) {
    return settings.data[sSettingsName];
};