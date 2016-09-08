var a = 1,
    b = 1;

var sum = function (a, b) {
    return a + b;
};
console.log(a);
console.log(b);
function test() {
    for (var i = 0; i < 10; i++) {
        console.log(sum(a, b));
        var next = a + b;
        a = b;
        b = next;
    }
}
//test();

var first = true;
var second = false;

console.log(first && !second);
