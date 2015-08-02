var bitRoutines = (function() {

    return {

        intAsBitString: function(x, width) {
            var bits = "";
            var digit = -1;

            while (width > 0) {
                digit = x & 1;
                bits = digit.toString() + bits;

                x = x >> 1;
                width--;
            }

            return bits;
        },

        diffMarkupBitVectors: function(
                                  str_x, str_y,
                                  cls_same, cls_different
                                  ) {
            var bits = "";

            // TODO: assert len(str_x) == len(str_y)

            for (var cur = 0; cur < str_x.length; cur++) {
                if (str_x[cur] === str_y[cur]) {
                    //bits = bits + '<span class="' + cls_same + '">' + str_y[cur] + "</span>";
                    bits = bits + str_y[cur];
                } else {
                    //bits = bits + '<span class="' + cls_different + '">' + str_y[cur] + "</span>";
                    bits = bits + str_y[cur];
                }
            }

            return bits;
        }

    }

})();
