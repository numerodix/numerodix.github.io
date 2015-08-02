var bithackCollection = (function() {
    var allOperations = [];

    var bitvectorWidth = 8;

    return {
        createOperation: function(
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
                            result);
                },


                applyOperator: function(x, y) {
                    var opName = this.getOperatorName();

                    if (opName === "xor") {
                        return x ^ y;
                    } else {
                        throw TypeError("invalid operator name: " + opName);
                    }
                }
            };

            allOperations.push(operation);
        },

        getOperationList: function() {
            return allOperations;
        }
    }

})();
