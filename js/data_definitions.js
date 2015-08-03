// 8 bits
var vecEmpty = 0x0;
var vecAlternating = 0x55;
var vecSelected = 0x30;
var vecFull = 0xff;

var mnemNoChange = "no change";
var mnemInvert = "inverts";
var mnemTestSelected = "tests the selected bits";
var mnemTurnOnAll = "turns on all bits";
var mnemTurnOnSelected = "turns on the selected bits";
var mnemTurnOffAll = "turns off all bits";
var mnemToggleSelected = "toggles selected bits";
var mnemShiftLeft = "shifts to the left";
var mnemShiftRight = "shifts to the right";


// AND

bithackCollection.createOperation(
        "alternating AND empty",
        "and",
        vecAlternating,
        vecEmpty,
        mnemTurnOffAll);

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
        mnemTestSelected);

bithackCollection.createOperation(
        "alternating AND self",
        "and",
        vecAlternating,
        vecAlternating,
        mnemNoChange);

bithackCollection.createOperation(
        "full AND empty",
        "and",
        vecFull,
        vecEmpty,
        mnemTurnOffAll);

bithackCollection.createOperation(
        "full AND full",
        "and",
        vecFull,
        vecFull,
        mnemNoChange);

bithackCollection.createOperation(
        "empty AND empty",
        "and",
        vecEmpty,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "empty AND full",
        "and",
        vecEmpty,
        vecFull,
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
        mnemTurnOnAll);

bithackCollection.createOperation(
        "alternating OR a given vector",
        "or",
        vecAlternating,
        vecSelected,
        mnemTurnOnSelected);

bithackCollection.createOperation(
        "alternating OR self",
        "or",
        vecAlternating,
        vecAlternating,
        mnemNoChange);

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
        "empty OR empty",
        "or",
        vecEmpty,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "empty OR full",
        "or",
        vecEmpty,
        vecFull,
        mnemTurnOnAll);


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
        mnemInvert);

bithackCollection.createOperation(
        "alternating XOR a given vector",
        "xor",
        vecAlternating,
        vecSelected,
        mnemToggleSelected);

bithackCollection.createOperation(
        "alternating XOR self",
        "xor",
        vecAlternating,
        vecAlternating,
        mnemTurnOffAll);

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
        mnemTurnOffAll);

bithackCollection.createOperation(
        "empty XOR empty",
        "xor",
        vecEmpty,
        vecEmpty,
        mnemNoChange);

bithackCollection.createOperation(
        "empty XOR full",
        "xor",
        vecEmpty,
        vecFull,
        mnemTurnOnAll);


// NOT

bithackCollection.createOperation(
        "NOT alternating",
        "not",
        vecAlternating,
        undefined,
        mnemInvert);

bithackCollection.createOperation(
        "NOT empty",
        "not",
        vecEmpty,
        undefined,
        mnemTurnOnAll);

bithackCollection.createOperation(
        "NOT full",
        "not",
        vecFull,
        undefined,
        mnemTurnOffAll);


// SHL

bithackCollection.createOperation(
        "SHL 1 alternating",
        "shl",
        vecAlternating,
        undefined,
        mnemShiftLeft);

bithackCollection.createOperation(
        "SHL 1 empty",
        "shl",
        vecEmpty,
        undefined,
        mnemNoChange);

bithackCollection.createOperation(
        "SHL 1 full",
        "shl",
        vecFull,
        undefined,
        mnemShiftLeft);


// SHR

bithackCollection.createOperation(
        "SHR 1 alternating",
        "shr",
        vecAlternating,
        undefined,
        mnemShiftRight);

bithackCollection.createOperation(
        "SHR 1 empty",
        "shr",
        vecEmpty,
        undefined,
        mnemNoChange);

bithackCollection.createOperation(
        "SHR 1 full",
        "shr",
        vecFull,
        undefined,
        mnemShiftRight);
