/**
 *
 * Generates a unicode range for regular expressions
 * from integer array
 *
 * @example
 *     [1,2,3,10,11,12,20,51,52,53,54]
 *     => getRangesOfEnumeration
 *     [ [ 1, 3 ], [ 10, 12 ], [ 20 ], [ 51, 54 ] ]
 *     => generate
 *     \u0001-\u0003\u000A-\u000C\u0014\u0033-\u0036
 *
 */
class RegexUnicodeRangeGenerator {
    static generate(integer_array) {
        let lower_cases = this.getRangesOfEnumeration(integer_array.sort(this._sort_integer_asc));
        let unicode_regex_ranges = lower_cases.map((e) => { return e.map((el) => { return "\\u" + this._dec2hex(el); }) });
        let joined_unicode_ranges = unicode_regex_ranges.map((el) => { if(el.length === 2) {return el.join("-")} else return el; });
        return joined_unicode_ranges.join('');
    }

    static getRangesOfEnumeration(enumeration) {
        let last_position = -1;
        let ranges = [];
        enumeration.forEach((val, i) => {
            if(val - last_position > 1) {
                if(last_position !== -1) {
                    if(last_position !== ranges[ranges.length-1][0]) {
                        ranges[ranges.length-1].push(last_position);
                    }
                }
                ranges.push([val]);
            }
            last_position = val;
        });
        ranges[ranges.length-1].push(last_position);
        return ranges;
    }

    static _sort_integer_asc(a, b) {
        return a - b;
    }

    static _dec2hex(i) {
        return (i+0x10000).toString(16).substr(-4).toUpperCase();
    }
}

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = RegexUnicodeRangeGenerator;
}
//<!-- /MODULE -->//