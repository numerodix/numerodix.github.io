var bithackCollection = (function() {
    var allOperations = [];

    var bitvectorWidth = 8;


    var m_createOperation = function(
                             name, operator_name,
                             bitvector_source, bitvector_target,
                             mnemonic) {

        var operation = {
            getName: function() {
                return name;
            },

            getOperatorName: function() {
                return operator_name;
            },

            getBitvectorSource: function() {
                return bitvector_source;
            },

            getBitvectorTarget: function() {
                return bitvector_target;
            },

            getBitvectorResult: function() {
                return this.applyOperator(
                        this.getBitvectorSource(),
                        this.getBitvectorTarget());
            },

            getMnemonic: function() {
                return mnemonic;
            },


            // bit vectors as strings

            getBitvectorSourceAsString: function() {
                return bitRoutines.intAsBitString(
                        this.getBitvectorSource(),
                        bitvectorWidth);
            },

            getBitvectorTargetAsString: function() {
                return bitRoutines.intAsBitString(
                        this.getBitvectorTarget(),
                        bitvectorWidth);
            },

            getBitvectorResultAsString: function() {
                var result = bitRoutines.intAsBitString(
                        this.getBitvectorResult(),
                        bitvectorWidth);

                return bitRoutines.diffMarkupBitVectors(
                        this.getBitvectorSourceAsString(),
                        result,
                        'digit_same',
                        'digit_different');
            },


            applyOperator: function(x, y) {
                var opName = this.getOperatorName();

                if (opName === "xor") {
                    return x ^ y;
                } else if (opName === "or") {
                    return x | y;
                } else if (opName === "and") {
                    return x & y;
                } else if (opName === "not") {
                    return ~x;
                } else if (opName === "rotl") {
                    return x << y;
                } else if (opName === "rotr") {
                    return x >> y;
                } else {
                    throw TypeError("invalid operator name: " + opName);
                }
            }
        };

        return operation;
    };



    // Produce return value object

    return {
        createOperation: function(
                             name, operator_name,
                             bitvector_source, bitvector_target,
                             mnemonic) {

            var operation = m_createOperation(
                    name, operator_name,
                    bitvector_source, bitvector_target,
                    mnemonic);

            var view = {
                name: operation.getName(),
                operatorName: operation.getOperatorName(),
                bitvectorSource: operation.getBitvectorSource(),
                bitvectorTarget: operation.getBitvectorTarget(),
                bitvectorResult: operation.getBitvectorResult(),
                bitvectorSourceAsString: operation.getBitvectorSourceAsString(),
                bitvectorTargetAsString: operation.getBitvectorTargetAsString(),
                bitvectorResultAsString: operation.getBitvectorResultAsString(),
                mnemonic: operation.getMnemonic(),
            };

            allOperations.push(view);

            return view;
        },

        getOperationList: function() {
            return allOperations;
        }
    }

})();
