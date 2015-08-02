// 8 bits
var vecEmpty = 0x0;
var vecAlternating = 0x55;
var vecSelected = 0x30;
var vecFull = 0xff;


// XOR

bithackCollection.createOperation(
        "xor alternating with empty",
        "xor",
        vecAlternating,
        vecEmpty,
        "no change");

bithackCollection.createOperation(
        "xor alternating with full",
        "xor",
        vecAlternating,
        vecFull,
        "inverts");

bithackCollection.createOperation(
        "xor alternating with a given vector",
        "xor",
        vecAlternating,
        vecSelected,
        "toggles selected bits");

bithackCollection.createOperation(
        "xor full with empty",
        "xor",
        vecFull,
        vecEmpty,
        "no change");

bithackCollection.createOperation(
        "xor full with full",
        "xor",
        vecFull,
        vecFull,
        "flips all / inverts");

bithackCollection.createOperation(
        "xor alternating with self",
        "xor",
        vecAlternating,
        vecAlternating,
        "produces empty");
