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

            getOperatorSymbol: function() {
                var opName = this.getOperatorName();

                if (opName === "xor") {
                    return '^';
                } else if (opName === "or") {
                    return '|';
                } else if (opName === "and") {
                    return '&';
                } else {
                    throw TypeError("invalid operator name: " + opName);
                }
            },

            getLabelName: function() {
                var opName = this.getOperatorName();

                if (opName === "xor") {
                    return 'label-primary';
                } else if (opName === "or") {
                    return 'label-info';
                } else if (opName === "and") {
                    return 'label-danger';
                } else {
                    throw TypeError("invalid operator name: " + opName);
                }
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

            // bit vectors as hex

            getBitvectorSourceAsHex: function() {
                return bitRoutines.intAsHexString(
                        this.getBitvectorSource());
            },

            getBitvectorTargetAsHex: function() {
                return bitRoutines.intAsHexString(
                        this.getBitvectorTarget());
            },

            getBitvectorResultAsHex: function() {
                return bitRoutines.intAsHexString(
                        this.getBitvectorResult());
            },


            applyOperator: function(x, y) {
                var opName = this.getOperatorName();

                if (opName === "xor") {
                    return x ^ y;
                } else if (opName === "or") {
                    return x | y;
                } else if (opName === "and") {
                    return x & y;
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
                operatorSymbol: operation.getOperatorSymbol(),
                labelName: operation.getLabelName(),
                bitvectorSource: operation.getBitvectorSource(),
                bitvectorTarget: operation.getBitvectorTarget(),
                bitvectorResult: operation.getBitvectorResult(),
                bitvectorSourceAsString: operation.getBitvectorSourceAsString(),
                bitvectorTargetAsString: operation.getBitvectorTargetAsString(),
                bitvectorResultAsString: operation.getBitvectorResultAsString(),
                bitvectorSourceAsHex: operation.getBitvectorSourceAsHex(),
                bitvectorTargetAsHex: operation.getBitvectorTargetAsHex(),
                bitvectorResultAsHex: operation.getBitvectorResultAsHex(),
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
