var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var resultText = document.getElementById("text");
var resultDate = document.getElementById("date");
btn1.onclick = birthdayData;
btn2.onclick = function showDate() {
    var today = new Date();
    resultDate.innerHTML = String(today);
};

function birthdayData() {
    var today = new Date(),
        day = String(today.getDate()).length < 2 ? "0" + today.getDate() : today.getDate(),
        month = String(today.getMonth() + 1).length < 2 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1,
        dayMonth = day + "." + month,
        friends = {
            "22.09": "Cate, Vanya",
            "23.09": "Misha",
            "27.09": "Google"
        };
    if (friends[dayMonth]) {
        resultText.innerHTML = friends[dayMonth] + " " + (friends[dayMonth].length > 5 ? "have" : "has") + " birthday today!";
    }
}
