var bithackCollection = (function() {
    var m_allOperations = [];
    var m_operationsByOperator = {};

    var bitvectorWidth = 8;


    var m_createOperation = function(
                             name, operator_name,
                             bitvector_source, bitvector_target,
                             mnemonic) {

        var operation = {
            getName: function() {
                return name;
            },

            getArity: function() {
                if (bitvector_target === undefined) {
                    return 1;
                }

                return 2;
            },

            getOperatorName: function() {
                return operator_name;
            },

            getOperatorSymbol: function(arity) {
                var opName = this.getOperatorName();

                if (arity === 1) {
                    if (opName === "not") {
                        return "~";
                    } else if (opName === "shl") {
                        return "<<";
                    } else if (opName === "shr") {
                        return ">>";
                    }

                } else if (arity === 2) {
                    if (opName === "xor") {
                        return '^';
                    } else if (opName === "or") {
                        return '|';
                    } else if (opName === "and") {
                        return '&';
                    }
                }

                return "";
            },

            getLabelName: function() {
                var opName = this.getOperatorName();

                if (opName === "xor") {
                    return 'label-primary';
                } else if (opName === "or") {
                    return 'label-info';
                } else if (opName === "and") {
                    return 'label-danger';
                } else if (opName === "not") {
                    return 'label-default';
                } else if (opName === "shl") {
                    return 'label-warning';
                } else if (opName === "shr") {
                    return 'label-success';
                } else {
                    throw TypeError("invalid operator name: " + opName);
                }
            },

            getBitvectorSource: function() {
                return bitvector_source;
            },

            getBitvectorTarget: function() {
                var arity = this.getArity();

                if (arity === 1) {
                    return undefined;
                }

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
                var arity = this.getArity();

                if (arity === 1) {
                    return "";
                }

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
                        this.getBitvectorSource(),
                        bitvectorWidth);
            },

            getBitvectorTargetAsHex: function() {
                return bitRoutines.intAsHexString(
                        this.getBitvectorTarget(),
                        bitvectorWidth);
            },

            getBitvectorResultAsHex: function() {
                return bitRoutines.intAsHexString(
                        this.getBitvectorResult(),
                        bitvectorWidth);
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
                } else if (opName === "shl") {
                    return x << 1;
                } else if (opName === "shr") {
                    return x >> 1;
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

            var operation_view = {
                name: operation.getName(),
                operatorName: operation.getOperatorName(),
                operatorSymbolUnary: operation.getOperatorSymbol(1),
                operatorSymbolBinary: operation.getOperatorSymbol(2),
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

            // Add it to our internal data structures
            m_allOperations.push(operation_view);
            if (m_operationsByOperator[operator_name] === undefined) {
                m_operationsByOperator[operator_name] = [];
            }
            m_operationsByOperator[operator_name].push(operation_view);

            return operation_view;
        },

        getOperationList: function() {
            return m_allOperations;
        },

        getOperationSets: function(mnemonicFilter) {
            var list = [];

            // loop over operation sets
            for (var key in m_operationsByOperator) {
                var operation_views = m_operationsByOperator[key];

                var set_container = {
                    operatorName: key,
                    operations: []
                };

                // loop over operations in the current set
                for (var idx in operation_views) {
                    var operation_view = operation_views[idx];
                    var exclude = false;

                    // if we have a filter it must either be "all" or match the operation
                    if ((mnemonicFilter !== undefined)
                            && ((mnemonicFilter !== "all")
                                && (mnemonicFilter !== operation_view.mnemonic))) {
                        exclude = true;
                    }

                    if (!exclude) {
                        set_container.operations.push(operation_view);
                    }
                }

                list.push(set_container);
            }

            return list;
        },

        getAllMnemonics: function() {
            var list = [];

            for (var i=0; i < m_allOperations.length; i++) {
                list.push(m_allOperations[i].mnemonic);
            }

            list.sort();
            list = _.unique(list);

            list.unshift("all");  // put catch-all at the beginning

            return list;
        }
    }

})();
