function getSport(cals) {
    var key;
    var goodsTime = {
// 100kkal
            "Бег": 41,
            "Велосипед": 28,
            "Плавание": 30,
            "Фитнес": 24
        },
        sportMessage = ""
        ;

    for (key in goodsTime) {
        sportMessage = Math.round(cals * goodsTime[key] / 100);
        sportMessage += " min. " + key;
        console.log(sportMessage);
    }
}
getSport(getCals("Каша гурьевская", 250));