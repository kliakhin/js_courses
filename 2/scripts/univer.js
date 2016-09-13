function getPaySum(student) {
    var SUM = 3000,
        LENGTH = 3,
        discount = 0,
        paySum = SUM,
        isStudent = student.isStudent,
        totalPay = student.totalPay;

    if (isStudent) {
        discount = 5;
    }

    if (totalPay) {
        paySum *= LENGTH;
        discount += 10;
    }

    paySum -= SUM * discount / 100;
    return paySum;
}

var students = {
    "Vasya": {"isStudent": true, "totalPay": true},
    "Kolya": {"isStudent": false, "totalPay": true},
    "Petya": {"isStudent": true, "totalPay": true}
};

students.forEach(function (entry) {
   console.log(entry.Vasya.isStudent.toString());
});
console.log(getPaySum(students.Petya));








