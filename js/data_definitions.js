// 8 bits
var vecEmpty = 0x0;
var vecAlternating = 0x55;
var vecSelected = 0x30;
var vecFull = 0xff;


// AND

bithackCollection.createOperation(
        "alternating AND empty",
        "and",
        vecAlternating,
        vecEmpty,
        "turns off all bits");

bithackCollection.createOperation(
        "alternating AND full",
        "and",
        vecAlternating,
        vecFull,
        "no change");

bithackCollection.createOperation(
        "alternating AND a given vector",
        "and",
        vecAlternating,
        vecSelected,
        "tests the selected bits");

bithackCollection.createOperation(
        "full AND empty",
        "and",
        vecFull,
        vecEmpty,
        "inverts");

bithackCollection.createOperation(
        "full AND full",
        "and",
        vecFull,
        vecFull,
        "no change");

bithackCollection.createOperation(
        "alternating AND self",
        "and",
        vecAlternating,
        vecAlternating,
        "no change");


// OR

bithackCollection.createOperation(
        "alternating OR empty",
        "or",
        vecAlternating,
        vecEmpty,
        "no change");

bithackCollection.createOperation(
        "alternating OR full",
        "or",
        vecAlternating,
        vecFull,
        "turns on all bits");

bithackCollection.createOperation(
        "alternating OR a given vector",
        "or",
        vecAlternating,
        vecSelected,
        "turns on selected bits");

bithackCollection.createOperation(
        "full OR empty",
        "or",
        vecFull,
        vecEmpty,
        "no change");

bithackCollection.createOperation(
        "full OR full",
        "or",
        vecFull,
        vecFull,
        "no change");

bithackCollection.createOperation(
        "alternating OR self",
        "or",
        vecAlternating,
        vecAlternating,
        "no change");


// XOR

bithackCollection.createOperation(
        "alternating XOR empty",
        "xor",
        vecAlternating,
        vecEmpty,
        "no change");

bithackCollection.createOperation(
        "alternating XOR full",
        "xor",
        vecAlternating,
        vecFull,
        "inverts");

bithackCollection.createOperation(
        "alternating XOR a given vector",
        "xor",
        vecAlternating,
        vecSelected,
        "toggles selected bits");

bithackCollection.createOperation(
        "full XOR empty",
        "xor",
        vecFull,
        vecEmpty,
        "no change");

bithackCollection.createOperation(
        "full XOR full",
        "xor",
        vecFull,
        vecFull,
        "flips all / inverts");

bithackCollection.createOperation(
        "alternating XOR self",
        "xor",
        vecAlternating,
        vecAlternating,
        "produces empty");
