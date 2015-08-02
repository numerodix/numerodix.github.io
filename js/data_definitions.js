// 8 bits
var vecEmpty = 0x0;
var vecAlternating = 0x55;
var vecSelected = 0x30;
var vecFull = 0xff;

var mnemNoChange = "no change";
var mnenProducesEmpty = "produces empty";
var mnenInvert = "inverts";
var mnenTestSelected = "tests the selected bits";
var mnenTurnOnAll = "turns on all bits";
var mnenTurnOnSelected = "turns on the selected bits";
var mnenTurnOffAll = "turns off all bits";
var mnenToggleSelected = "toggles selected bits";


// AND

bithackCollection.createOperation(
        "alternating AND empty",
        "and",
        vecAlternating,
        vecEmpty,
        mnenTurnOffAll);

bithackCollection.createOperation(
        "alternating AND full",
        "and",
        vecAlternating,
        vecFull,
        mnemNoChange);

bithackCollection.createOperation(
        "alternating AND a given vector",
        "and",
        vecAlternating,
        vecSelected,
        mnenTestSelected);

bithackCollection.createOperation(
        "full AND empty",
        "and",
        vecFull,
        vecEmpty,
        mnenInvert);

bithackCollection.createOperation(
        "full AND full",
        "and",
        vecFull,
        vecFull,
        mnemNoChange);

bithackCollection.createOperation(
        "alternating AND self",
        "and",
        vecAlternating,
        vecAlternating,
        mnemNoChange);


// OR

bithackCollection.createOperation(
        "alternating OR empty",
        "or",
        vecAlternating,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "alternating OR full",
        "or",
        vecAlternating,
        vecFull,
        mnenTurnOnAll);

bithackCollection.createOperation(
        "alternating OR a given vector",
        "or",
        vecAlternating,
        vecSelected,
        mnenTurnOnSelected);

bithackCollection.createOperation(
        "full OR empty",
        "or",
        vecFull,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "full OR full",
        "or",
        vecFull,
        vecFull,
        mnemNoChange);

bithackCollection.createOperation(
        "alternating OR self",
        "or",
        vecAlternating,
        vecAlternating,
        mnemNoChange);


// XOR

bithackCollection.createOperation(
        "alternating XOR empty",
        "xor",
        vecAlternating,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "alternating XOR full",
        "xor",
        vecAlternating,
        vecFull,
        mnenInvert);

bithackCollection.createOperation(
        "alternating XOR a given vector",
        "xor",
        vecAlternating,
        vecSelected,
        mnenToggleSelected);

bithackCollection.createOperation(
        "full XOR empty",
        "xor",
        vecFull,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "full XOR full",
        "xor",
        vecFull,
        vecFull,
        mnenInvert);

bithackCollection.createOperation(
        "alternating XOR self",
        "xor",
        vecAlternating,
        vecAlternating,
        mnenProducesEmpty);
