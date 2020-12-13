//<!-- MODULE -->//
if(typeof require === 'function') {
    var LuckyCase = require('./lucky-case.js');
}
//<!-- /MODULE -->//
//----------------------------------------------------------------------------------------------------
// STRING JSDOC definition only
//----------------------------------------------------------------------------------------------------

//<!-- DOC -->//
/**
 * out of scope function only for jsdoc documentation generation purpose
 */
(function () {
    /**
     * LuckyCase version to add methods directly to string by monkey patching
     */
    class String {
        /**
         * Get type of case of string (one key of LuckyCase.CASES)
         *
         * If more than one case matches, the first match wins.
         * Match prio is the order of the regex in LuckyCase.CASES
         *
         * If you want or need to know all cases, use plural version of this method
         *
         * If you want to check explicitly for one case, use its check method,
         * e.g. isSnakeCase(..) for 'SNAKE_CASE', etc...
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {string|null} string of caseType, null if no match
         */
        letterCase(allow_prefixed_underscores = true) {
            return LuckyCase.case(this, allow_prefixed_underscores);
        }

        /**
         * Get types of cases of string (keys of LuckyCase.CASES)
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {string[]|null}
         */
        letterCases(allow_prefixed_underscores = true) {
            return LuckyCase.cases(this, allow_prefixed_underscores);
        }

        /**
         * Convert a string into the given case type
         *
         * @param {string} case_type
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        convertCase(case_type, preserve_prefixed_underscores = true) {
            return LuckyCase.convertCase(this, case_type, preserve_prefixed_underscores);
        }

        /**
         * Check if the string matches any of the available cases
         *
         * @returns {boolean}
         */
        isValidCaseString() {
            return LuckyCase.isValidCaseString(this);
        }

        //----------------------------------------------------------------------------------------------------
        // UPPER CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert all characters inside the string
         * into upper case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'THIS-ISANEXAMPLE_STRING'
         *
         * @returns {string}
         */
        toUpperCase() {
            return LuckyCase.toUpperCase(this);
        }

        /**
         * Check if all characters inside the string are upper case
         *
         * @returns {boolean}
         */
        isUpperCase() {
            return LuckyCase.isUpperCase(this);
        }

        //----------------------------------------------------------------------------------------------------
        // LOWER CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert all characters inside the string
         * into lower case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'this-isanexample_string'
         *
         * @returns {string}
         */
        toLowerCase() {
            return LuckyCase.toLowerCase(this);
        }

        /**
         * Check if all characters inside the string are lower case
         *
         * @returns {boolean}
         */
        isLowerCase() {
            return LuckyCase.isLowerCase(this);
        }

        //----------------------------------------------------------------------------------------------------
        // SNAKE CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into snake case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'this_is_an_example_string'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toSnakeCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toSnakeCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is snake case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isSnakeCase(allow_prefixed_underscores = true) {
            return LuckyCase.isSnakeCase(this, allow_prefixed_underscores);
        }

        /**
         * Convert the string from any case
         * into upper snake case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'THIS_IS_AN_EXAMPLE_STRING'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toUpperSnakeCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toUpperSnakeCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is upper snake case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isUpperSnakeCase(allow_prefixed_underscores = true) {
            return LuckyCase.isUpperSnakeCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // PASCAL CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into pascal case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'ThisIsAnExampleString'
         *
         * @param preserve_prefixed_underscores
         * @returns {string}
         */
        toPascalCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toPascalCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is upper pascal case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isPascalCase(allow_prefixed_underscores = true)  {
            return LuckyCase.isPascalCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // CAMEL CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into camel case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'thisIsAnExampleString'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toCamelCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toCamelCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is camel case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isCamelCase(allow_prefixed_underscores = true) {
            return LuckyCase.isCamelCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // DASH CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into dash case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'this-is-an-example-string'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toDashCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toDashCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is dash case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isDashCase(allow_prefixed_underscores = true) {
            return LuckyCase.isDashCase(this, allow_prefixed_underscores);
        }

        /**
         * Convert the string from any case
         * into upper dash case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'THIS-IS-AN-EXAMPLE-STRING'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toUpperDashCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toUpperDashCase(preserve_prefixed_underscores);
        }

        /**
         * Check if the string is upper dash case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isUpperDashCase(allow_prefixed_underscores = true) {
            return LuckyCase.isUpperDashCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // TRAIN CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into train case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'This-Is-An-Example-String'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toTrainCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toTrainCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is train case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isTrainCase(allow_prefixed_underscores = true) {
            return LuckyCase.isTrainCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // WORD CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into word case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'this is an example string'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toWordCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toWordCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is word case
         *
         * @param allow_prefixed_underscores
         * @returns {boolean}
         */
        isWordCase(allow_prefixed_underscores = true) {
            return LuckyCase.isWordCase(this, allow_prefixed_underscores);
        }

        /**
         * Convert the string from any case
         * into upper word case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'THIS IS AN EXAMPLE STRING'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toUpperWordCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toUpperWordCase(preserve_prefixed_underscores);
        }

        /**
         * Check if the string is upper word case
         *
         * @param allow_prefixed_underscores
         * @returns {boolean}
         */
        isUpperWordCase(allow_prefixed_underscores = true) {
            return LuckyCase.isUpperWordCase(this, allow_prefixed_underscores);
        }

        /**
         * Convert the string from any case
         * into capital word case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'This Is An Example String'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toCapitalWordCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toCapitalWordCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is capital word case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isCapitalWordCase(allow_prefixed_underscores = true) {
            return LuckyCase.isCapitalWordCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // SENTENCE CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into sentence case
         *
         * @example conversion
         *      'this-isAnExample_string' => 'This is an example string'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toSentenceCase(preserve_prefixed_underscores = true) {
            return LuckyCase.toSentenceCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is sentence case
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isSentenceCase(allow_prefixed_underscores = true) {
            return LuckyCase.isSentenceCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // CAPITALIZE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the first character to capital
         *
         * @param {boolean} skip_prefixed_underscores
         * @returns {string}
         */
        toCapital(skip_prefixed_underscores = false) {
            return LuckyCase.toCapital(this, skip_prefixed_underscores);
        }

        /**
         * Convert the first character to capital
         *
         * @param {boolean} skip_prefixed_underscores
         * @returns {string}
         */
        capitalize(skip_prefixed_underscores = false) {
            return LuckyCase.capitalize(this, skip_prefixed_underscores);
        }

        /**
         * Check if the strings first character is a capital letter
         *
         * @param {boolean} skip_prefixed_underscores
         * @returns {boolean}
         */
        isCapital(skip_prefixed_underscores = false) {
            return LuckyCase.isCapital(this, skip_prefixed_underscores);
        }

        /**
         * Check if the strings first character is a capital letter
         *
         * @param {boolean} skip_prefixed_underscores
         * @returns {boolean}
         */
        isCapitalized(skip_prefixed_underscores = false) {
            return LuckyCase.isCapitalized(this, skip_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // MIXED CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into mixed case.
         *
         * The new string is ensured to be different from the input.
         *
         * @example conversion
         *      'this-isAnExample_string' => 'This-Is_anExample-string'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        toMixedCase(preserve_prefixed_underscores = false) {
            return LuckyCase.toMixedCase(this, preserve_prefixed_underscores);
        }

        /**
         * Check if the string is a valid mixed case (without special characters!)
         *
         * @param {boolean} allow_prefixed_underscores
         * @returns {boolean}
         */
        isMixedCase(allow_prefixed_underscores = true) {
            return LuckyCase.isMixedCase(this, allow_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // SWAP CASE
        //----------------------------------------------------------------------------------------------------

        /**
         * Swaps character cases in string
         *
         * lower case to upper case
         * upper case to lower case
         * dash to underscore
         * underscore to dash
         *
         * @example conversion
         *      'this-isAnExample_string' => 'THIS_ISaNeXAMPLE-STRING'
         *
         * @param {boolean} preserve_prefixed_underscores
         * @returns {string}
         */
        swapCase(preserve_prefixed_underscores = false) {
            return LuckyCase.swapCase(this, preserve_prefixed_underscores);
        }

        //----------------------------------------------------------------------------------------------------
        // CONSTANTIZE
        //----------------------------------------------------------------------------------------------------

        /**
         * Convert the string from any case
         * into pascal case and casts it into a constant
         *
         * @example conversion
         *      'this-isAnExample_string' => ThisIsAnExampleString
         *      'this/is_an/example_path' => ThisIsAnExamplePath
         *
         * @returns {any}
         */
        constantize() {
            return LuckyCase.constantize(this);
        }
    }
});
//<!-- /DOC -->//

//----------------------------------------------------------------------------------------------------
// STRING MONKEY PATCH
//----------------------------------------------------------------------------------------------------

Object.assign(String.prototype, {
    /**
     * Get type of case of string (one key of LuckyCase.CASES)
     *
     * If more than one case matches, the first match wins.
     * Match prio is the order of the regex in LuckyCase.CASES
     *
     * If you want or need to know all cases, use plural version of this method
     *
     * If you want to check explicitly for one case, use its check method,
     * e.g. isSnakeCase(..) for 'SNAKE_CASE', etc...
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {string|null} string of caseType, null if no match
     */
    letterCase(allow_prefixed_underscores = true) {
        return LuckyCase.case(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Get types of cases of string (keys of LuckyCase.CASES)
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {string[]|null}
     */
    letterCases(allow_prefixed_underscores = true) {
        return LuckyCase.cases(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert a string into the given case type
     *
     * @param {string} case_type
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    convertCase(case_type, preserve_prefixed_underscores = true) {
        return LuckyCase.convertCase(this, case_type, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string matches any of the available cases
     *
     * @returns {boolean}
     */
    isValidCaseString() {
        return LuckyCase.isValidCaseString(this);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert all characters inside the string
     * into upper case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'THIS-ISANEXAMPLE_STRING'
     *
     * @returns {string}
     */
    toUpperCase() {
        return LuckyCase.toUpperCase(this);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if all characters inside the string are upper case
     *
     * @returns {boolean}
     */
    isUpperCase() {
        return LuckyCase.isUpperCase(this);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert all characters inside the string
     * into lower case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'this-isanexample_string'
     *
     * @returns {string}
     */
    toLowerCase() {
        return LuckyCase.toLowerCase(this);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if all characters inside the string are lower case
     *
     * @returns {boolean}
     */
    isLowerCase() {
        return LuckyCase.isLowerCase(this);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into snake case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'this_is_an_example_string'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toSnakeCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toSnakeCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is snake case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isSnakeCase(allow_prefixed_underscores = true) {
        return LuckyCase.isSnakeCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into upper snake case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'THIS_IS_AN_EXAMPLE_STRING'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toUpperSnakeCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toUpperSnakeCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is upper snake case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isUpperSnakeCase(allow_prefixed_underscores = true) {
        return LuckyCase.isUpperSnakeCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into pascal case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'ThisIsAnExampleString'
     *
     * @param preserve_prefixed_underscores
     * @returns {string}
     */
    toPascalCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toPascalCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is upper pascal case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isPascalCase(allow_prefixed_underscores = true)  {
        return LuckyCase.isPascalCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into camel case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'thisIsAnExampleString'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toCamelCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toCamelCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is camel case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isCamelCase(allow_prefixed_underscores = true) {
        return LuckyCase.isCamelCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into dash case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'this-is-an-example-string'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toDashCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toDashCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is dash case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isDashCase(allow_prefixed_underscores = true) {
        return LuckyCase.isDashCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into upper dash case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'THIS-IS-AN-EXAMPLE-STRING'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toUpperDashCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toUpperDashCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is upper dash case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isUpperDashCase(allow_prefixed_underscores = true) {
        return LuckyCase.isUpperDashCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into train case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'This-Is-An-Example-String'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toTrainCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toTrainCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is train case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isTrainCase(allow_prefixed_underscores = true) {
        return LuckyCase.isTrainCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into word case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'this is an example string'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toWordCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toWordCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is word case
     *
     * @param allow_prefixed_underscores
     * @returns {boolean}
     */
    isWordCase(allow_prefixed_underscores = true) {
        return LuckyCase.isWordCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into upper word case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'THIS IS AN EXAMPLE STRING'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toUpperWordCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toUpperWordCase(preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is upper word case
     *
     * @param allow_prefixed_underscores
     * @returns {boolean}
     */
    isUpperWordCase(allow_prefixed_underscores = true) {
        return LuckyCase.isUpperWordCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into capital word case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'This Is An Example String'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toCapitalWordCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toCapitalWordCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is capital word case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isCapitalWordCase(allow_prefixed_underscores = true) {
        return LuckyCase.isCapitalWordCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into sentence case
     *
     * @example conversion
     *      'this-isAnExample_string' => 'This is an example string'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toSentenceCase(preserve_prefixed_underscores = true) {
        return LuckyCase.toSentenceCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is sentence case
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isSentenceCase(allow_prefixed_underscores = true) {
        return LuckyCase.isSentenceCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the first character to capital
     *
     * @param {boolean} skip_prefixed_underscores
     * @returns {string}
     */
    toCapital(skip_prefixed_underscores = false) {
        return LuckyCase.toCapital(this, skip_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the first character to capital
     *
     * @param {boolean} skip_prefixed_underscores
     * @returns {string}
     */
    capitalize(skip_prefixed_underscores = false) {
        return LuckyCase.capitalize(this, skip_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the strings first character is a capital letter
     *
     * @param {boolean} skip_prefixed_underscores
     * @returns {boolean}
     */
    isCapital(skip_prefixed_underscores = false) {
        return LuckyCase.isCapital(this, skip_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the strings first character is a capital letter
     *
     * @param {boolean} skip_prefixed_underscores
     * @returns {boolean}
     */
    isCapitalized(skip_prefixed_underscores = false) {
        return LuckyCase.isCapitalized(this, skip_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into mixed case.
     *
     * The new string is ensured to be different from the input.
     *
     * @example conversion
     *      'this-isAnExample_string' => 'This-Is_anExample-string'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    toMixedCase(preserve_prefixed_underscores = false) {
        return LuckyCase.toMixedCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Check if the string is a valid mixed case (without special characters!)
     *
     * @param {boolean} allow_prefixed_underscores
     * @returns {boolean}
     */
    isMixedCase(allow_prefixed_underscores = true) {
        return LuckyCase.isMixedCase(this, allow_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Swaps character cases in string
     *
     * lower case to upper case
     * upper case to lower case
     * dash to underscore
     * underscore to dash
     *
     * @example conversion
     *      'this-isAnExample_string' => 'THIS_ISaNeXAMPLE-STRING'
     *
     * @param {boolean} preserve_prefixed_underscores
     * @returns {string}
     */
    swapCase(preserve_prefixed_underscores = false) {
        return LuckyCase.swapCase(this, preserve_prefixed_underscores);
    }
});

Object.assign(String.prototype, {
    /**
     * Convert the string from any case
     * into pascal case and casts it into a constant
     *
     * @example conversion
     *      'this-isAnExample_string' => ThisIsAnExampleString
     *      'this/is_an/example_path' => ThisIsAnExamplePath
     *
     * @returns {any}
     */
    constantize() {
        return LuckyCase.constantize(this);
    }
});

//<!-- MODULE -->//
if(typeof module !== 'undefined' && module.exports) {
    module.exports = LuckyCase;
}
//<!-- /MODULE -->//