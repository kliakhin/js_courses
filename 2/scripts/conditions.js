var orderSum = 300,
    diff = 0;
const SUM = 500;


if (orderSum >= SUM) {
    console.log("Free shipping");
} else {
    diff = SUM - orderSum;
    console.log("You should by for " + diff + " yet!");
}