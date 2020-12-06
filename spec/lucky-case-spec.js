const LuckyCase = require('../src/lucky-case/lucky-case.js');
const InvalidCaseError = require('../src/lucky-case/custom-errors/invalid-case-error');


// extend Object to filter
Object.filter = function( obj, predicate) {
    let result = {}, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
};


//----------------------------------------------------------------------------------------------------

describe('String', function () {
    beforeEach(function () {
    });
    it('has not been monkey patched by LuckyCase', function () {
        expect(() => {
            "string".toSnakeCase()
        }).toThrowError(TypeError);
        expect(() => {
            "string".toCapital()
        }).toThrowError(TypeError);
        expect(() => {
            "string".toWordCase()
        }).toThrowError(TypeError);
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.splitCaseString', function () {
    beforeEach(function () {
    });
    describe('Splitting variants without prefixed underscores: ', function () {
        it('can split snake case', function () {
            const result = LuckyCase.splitCaseString('snake_case_string');
            expect(result).toEqual(['snake', 'case', 'string']);
        });
        it('can split upper snake case', function () {
            const result = LuckyCase.splitCaseString('UPPER_SNAKE_CASE_STRING');
            expect(result).toEqual(['upper', 'snake', 'case', 'string']);
        });
        it('can split pascal case', function () {
            const result = LuckyCase.splitCaseString('PascalCaseString');
            expect(result).toEqual(['pascal', 'case', 'string']);
        });
        it('can split camel case', function () {
            const result = LuckyCase.splitCaseString('camelCaseString');
            expect(result).toEqual(['camel', 'case', 'string']);
        });
        it('can split dash case', function () {
            const result = LuckyCase.splitCaseString('dash-case-string');
            expect(result).toEqual(['dash', 'case', 'string']);
        });
        it('can split upper dash case', function () {
            const result = LuckyCase.splitCaseString('UPPER-DASH-CASE-STRING');
            expect(result).toEqual(['upper', 'dash', 'case', 'string']);
        });
        it('can split train case', function () {
            const result = LuckyCase.splitCaseString('Train-Case-String');
            expect(result).toEqual(['train', 'case', 'string']);
        });
        it('can split word case', function () {
            const result = LuckyCase.splitCaseString('word case string');
            expect(result).toEqual(['word', 'case', 'string']);
        });
        it('can split upper word case', function () {
            const result = LuckyCase.splitCaseString('UPPER WORD CASE');
            expect(result).toEqual(['upper', 'word', 'case']);
        });
        it('can split capital word case', function () {
            const result = LuckyCase.splitCaseString('Capital Word Case');
            expect(result).toEqual(['capital', 'word', 'case']);
        });
        it('can split sentence case', function () {
            const result = LuckyCase.splitCaseString('Sentence case string');
            expect(result).toEqual(['sentence', 'case', 'string']);
        });
        it('can split snake case', function () {
            const result = LuckyCase.splitCaseString('mixed_Case-string');
            expect(result).toEqual(['mixed', 'case', 'string']);
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.splitCaseString', function () {
    beforeEach(function () {
    });
    describe('Splitting variants with prefixed underscores: ', function () {
        it('can split snake case', function () {
            const result = LuckyCase.splitCaseString('_snake_case_string');
            expect(result).toEqual(['snake', 'case', 'string']);
        });
        it('can split upper snake case', function () {
            const result = LuckyCase.splitCaseString('__UPPER_SNAKE_CASE_STRING');
            expect(result).toEqual(['upper', 'snake', 'case', 'string']);
        });
        it('can split pascal case', function () {
            const result = LuckyCase.splitCaseString('___PascalCaseString');
            expect(result).toEqual(['pascal', 'case', 'string']);
        });
        it('can split camel case', function () {
            const result = LuckyCase.splitCaseString('____camelCaseString');
            expect(result).toEqual(['camel', 'case', 'string']);
        });
        it('can split dash case', function () {
            const result = LuckyCase.splitCaseString('_____dash-case-string');
            expect(result).toEqual(['dash', 'case', 'string']);
        });
        it('can split upper dash case', function () {
            const result = LuckyCase.splitCaseString('____UPPER-DASH-CASE-STRING');
            expect(result).toEqual(['upper', 'dash', 'case', 'string']);
        });
        it('can split train case', function () {
            const result = LuckyCase.splitCaseString('___Train-Case-String');
            expect(result).toEqual(['train', 'case', 'string']);
        });
        it('can split word case', function () {
            const result = LuckyCase.splitCaseString('___word case string');
            expect(result).toEqual(['word', 'case', 'string']);
        });
        it('can split upper word case', function () {
            const result = LuckyCase.splitCaseString('___UPPER WORD CASE');
            expect(result).toEqual(['upper', 'word', 'case']);
        });
        it('can split capital word case', function () {
            const result = LuckyCase.splitCaseString('___Capital Word Case');
            expect(result).toEqual(['capital', 'word', 'case']);
        });
        it('can split sentence case', function () {
            const result = LuckyCase.splitCaseString('___Sentence case string');
            expect(result).toEqual(['sentence', 'case', 'string']);
        });
        it('can split snake case', function () {
            const result = LuckyCase.splitCaseString('__mixed_Case-string');
            expect(result).toEqual(['mixed', 'case', 'string']);
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.case', function () {
    beforeEach(function () {
    });
    describe('Detecting variants without prefixed underscores: ', function () {
        it('can detect snake case', function () {
            const result = LuckyCase.case('snake_case_string');
            expect(result).toEqual('SNAKE_CASE');
            expect(result).toEqual(LuckyCase.SNAKE_CASE);
        });
        it('can detect upper snake case', function () {
            const result = LuckyCase.case('UPPER_SNAKE_CASE_STRING');
            expect(result).toEqual('UPPER_SNAKE_CASE');
            expect(result).toEqual(LuckyCase.UPPER_SNAKE_CASE);
        });
        it('can detect pascal case', function () {
            const result = LuckyCase.case('PascalCaseString');
            expect(result).toEqual('PASCAL_CASE');
            expect(result).toEqual(LuckyCase.PASCAL_CASE);
        });
        it('can detect camel case', function () {
            const result = LuckyCase.case('camelCaseString');
            expect(result).toEqual('CAMEL_CASE');
            expect(result).toEqual(LuckyCase.CAMEL_CASE);
        });
        it('can detect dash case', function () {
            const result = LuckyCase.case('dash-case-string');
            expect(result).toEqual('DASH_CASE');
            expect(result).toEqual(LuckyCase.DASH_CASE);
        });
        it('can detect upper dash case', function () {
            const result = LuckyCase.case('UPPER-DASH-CASE-STRING');
            expect(result).toEqual('UPPER_DASH_CASE');
            expect(result).toEqual(LuckyCase.UPPER_DASH_CASE);
        });
        it('can detect train case', function () {
            const result = LuckyCase.case('Train-Case-String');
            expect(result).toEqual('TRAIN_CASE');
            expect(result).toEqual(LuckyCase.TRAIN_CASE);
        });
        it('can detect word case', function () {
            const result = LuckyCase.case('word case string');
            expect(result).toEqual('WORD_CASE');
            expect(result).toEqual(LuckyCase.WORD_CASE);
        });
        it('can detect upper word case', function () {
            const result = LuckyCase.case('UPPER WORD CASE');
            expect(result).toEqual('UPPER_WORD_CASE');
            expect(result).toEqual(LuckyCase.UPPER_WORD_CASE);
        });
        it('can detect capital word case', function () {
            const result = LuckyCase.case('Capital Word Case');
            expect(result).toEqual('CAPITAL_WORD_CASE');
            expect(result).toEqual(LuckyCase.CAPITAL_WORD_CASE);
        });
        it('can detect sentence case', function () {
            const result = LuckyCase.case('Sentence case string');
            expect(result).toEqual('SENTENCE_CASE');
            expect(result).toEqual(LuckyCase.SENTENCE_CASE);
        });
        it('can detect mixed case', function () {
            const result = LuckyCase.case('mixed_Case-string');
            expect(result).toEqual('MIXED_CASE');
            expect(result).toEqual(LuckyCase.MIXED_CASE);
        });
        it('can detect unknown case', function () {
            const result = LuckyCase.case('mi%&/xed_Case-string');
            expect(result).toEqual(null);
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.case', function () {
    beforeEach(function () {
    });
    describe('Detecting variants with prefixed underscores: ', function () {
        it('can detect snake case', function () {
            const result = LuckyCase.case('_____snake_case_string');
            expect(result).toEqual('SNAKE_CASE');
            expect(result).toEqual(LuckyCase.SNAKE_CASE);
        });
        it('can detect upper snake case', function () {
            const result = LuckyCase.case('____UPPER_SNAKE_CASE_STRING');
            expect(result).toEqual('UPPER_SNAKE_CASE');
            expect(result).toEqual(LuckyCase.UPPER_SNAKE_CASE);
        });
        it('can detect pascal case', function () {
            const result = LuckyCase.case('___PascalCaseString');
            expect(result).toEqual('PASCAL_CASE');
            expect(result).toEqual(LuckyCase.PASCAL_CASE);
        });
        it('can detect camel case', function () {
            const result = LuckyCase.case('__camelCaseString');
            expect(result).toEqual('CAMEL_CASE');
            expect(result).toEqual(LuckyCase.CAMEL_CASE);
        });
        it('can detect dash case', function () {
            const result = LuckyCase.case('_dash-case-string');
            expect(result).toEqual('DASH_CASE');
            expect(result).toEqual(LuckyCase.DASH_CASE);
        });
        it('can detect upper dash case', function () {
            const result = LuckyCase.case('__UPPER-DASH-CASE-STRING');
            expect(result).toEqual('UPPER_DASH_CASE');
            expect(result).toEqual(LuckyCase.UPPER_DASH_CASE);
        });
        it('can detect train case', function () {
            const result = LuckyCase.case('___Train-Case-String');
            expect(result).toEqual('TRAIN_CASE');
            expect(result).toEqual(LuckyCase.TRAIN_CASE);
        });
        it('can detect word case', function () {
            const result = LuckyCase.case('___word case string');
            expect(result).toEqual('WORD_CASE');
            expect(result).toEqual(LuckyCase.WORD_CASE);
        });
        it('can detect upper word case', function () {
            const result = LuckyCase.case('___UPPER WORD CASE');
            expect(result).toEqual('UPPER_WORD_CASE');
            expect(result).toEqual(LuckyCase.UPPER_WORD_CASE);
        });
        it('can detect capital word case', function () {
            const result = LuckyCase.case('___Capital Word Case');
            expect(result).toEqual('CAPITAL_WORD_CASE');
            expect(result).toEqual(LuckyCase.CAPITAL_WORD_CASE);
        });
        it('can detect sentence case', function () {
            const result = LuckyCase.case('___Sentence case string');
            expect(result).toEqual('SENTENCE_CASE');
            expect(result).toEqual(LuckyCase.SENTENCE_CASE);
        });
        it('can detect mixed case', function () {
            const result = LuckyCase.case('___mixed_Case-string');
            expect(result).toEqual('MIXED_CASE');
            expect(result).toEqual(LuckyCase.MIXED_CASE);
        });
        it('can detect unknown case', function () {
            const result = LuckyCase.case('_____mi%&/xed_Case-string');
            expect(result).toEqual(null);
        });
        it('can detect invalid unknown case', function () {
            const result = LuckyCase.case('Not-Unknown-Case');
            expect(result).not.toEqual(null);
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase', function () {
    beforeEach(function () {
    });
    describe('Checking variants without prefixed underscores: ', function () {
        var all_cases = {
            snake_case: 'snake_case_string',
            upper_snake_case: 'UPPER_SNAKE_CASE_STRING',
            pascal_case: 'PascalCaseString',
            camel_case: 'camelCaseString',
            dash_case: 'dash-case-string',
            upper_dash_case: 'UPPER-DASH-CASE-STRING',
            train_case: 'Train-Case-String',
            word_case: 'word case string',
            upper_word_case: 'UPPER WORD CASE STRING',
            capital_word_case: 'Capital Word Case String',
            sentence_case: 'Sentence case string',
        }
        it('can check valid snake case', function () {
            const result = LuckyCase.isSnakeCase(all_cases.snake_case);
            expect(result).toEqual(true);
        });
        it('can check invalid snake case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.snake_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isSnakeCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid upper snake case', function () {
            const result = LuckyCase.isUpperSnakeCase(all_cases.upper_snake_case);
            expect(result).toEqual(true);
        });
        it('can check invalid upper snake case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.upper_snake_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isUpperSnakeCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid pascal case', function () {
            const result = LuckyCase.isPascalCase(all_cases.pascal_case);
            expect(result).toEqual(true);
        });
        it('can check invalid pascal case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.pascal_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isPascalCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid camel case', function () {
            const result = LuckyCase.isCamelCase(all_cases.camel_case);
            expect(result).toEqual(true);
        });
        it('can check invalid camel case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.camel_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isCamelCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid dash case', function () {
            const result = LuckyCase.isDashCase(all_cases.dash_case);
            expect(result).toEqual(true);
        });
        it('can check invalid dash case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.dash_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isDashCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid upper dash case', function () {
            const result = LuckyCase.isUpperDashCase(all_cases.upper_dash_case);
            expect(result).toEqual(true);
        });
        it('can check invalid upper dash case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.upper_dash_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isUpperDashCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid train case', function () {
            const result = LuckyCase.isTrainCase(all_cases.train_case);
            expect(result).toEqual(true);
        });
        it('can check invalid train case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.train_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isTrainCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid word case', function () {
            const result = LuckyCase.isWordCase(all_cases.word_case);
            expect(result).toEqual(true);
        });
        it('can check invalid word case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.word_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isWordCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid upper word case', function () {
            const result = LuckyCase.isUpperWordCase(all_cases.upper_word_case);
            expect(result).toEqual(true);
        });
        it('can check invalid upper word case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.upper_word_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isUpperWordCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid capital word case', function () {
            const result = LuckyCase.isCapitalWordCase(all_cases.capital_word_case);
            expect(result).toEqual(true);
        });
        it('can check invalid capital word case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.capital_word_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isCapitalWordCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid sentence case', function () {
            const result = LuckyCase.isSentenceCase(all_cases.sentence_case);
            expect(result).toEqual(true);
        });
        it('can check invalid sentence case', function () {
            let cases = { ...all_cases }; // clone
            delete cases.sentence_case;
            for(let case_key of Object.keys(cases)) {
                const case_value = cases[case_key];
                const result = LuckyCase.isSentenceCase(case_value);
                expect(result).toEqual(false);
            }
        });
        it('can check valid mixed case', function () {
            const result = LuckyCase.isMixedCase('mixed_Case-string');
            expect(result).toEqual(true);
        });
        it('can check invalid mixed case', function () {
            const result = LuckyCase.isMixedCase('not_mixed/$§case_string');
            expect(result).toEqual(false);
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase', function () {
    beforeEach(function () {
    });
    describe('snake case conversions: ', function () {
        it('default into snake case', function () {
            const conversion_examples = {
                'ExampleOne': 'example_one',
                'exampleTwo': 'example_two',
                'example-three': 'example_three',
                'Example-Four': 'example_four',
                'EXAMPLE-FIVE': 'example_five',
                'EXAMPLE_SIX': 'example_six',
                'example_Seven-extra': 'example_seven_extra',
                'example_eight': 'example_eight',
                '_example_underscoreOne': '_example_underscore_one',
                '___example_underscoreTwo': '___example_underscore_two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toSnakeCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.SNAKE_CASE));
            }
        });
        it('into snake case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_example_one',
                '_exampleTwo': '_example_two',
                '____example-three': '____example_three',
                '_Example-Four': '_example_four',
                '__EXAMPLE-FIVE': '__example_five',
                '___EXAMPLE_SIX': '___example_six',
                '_____example_Seven-extra': '_____example_seven_extra',
                '__example_eight': '__example_eight',
                '_example_underscoreOne': '_example_underscore_one',
                '___example_underscoreTwo': '___example_underscore_two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toSnakeCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.SNAKE_CASE));
            }
        });
        it('into snake case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'example_one',
                '_exampleTwo': 'example_two',
                '____example-three': 'example_three',
                '_Example-Four': 'example_four',
                '__EXAMPLE-FIVE': 'example_five',
                '___EXAMPLE_SIX': 'example_six',
                '_____example_Seven-extra': 'example_seven_extra',
                '__example_eight': 'example_eight',
                '_example_underscoreOne': 'example_underscore_one',
                '___example_underscoreTwo': 'example_underscore_two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toSnakeCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.SNAKE_CASE, false));
            }
        });
    });
    
    describe('upper snake case conversions: ', function () {
        it('default into upper snake case', function () {
            const conversion_examples = {
                'ExampleOne': 'EXAMPLE_ONE',
                'exampleTwo': 'EXAMPLE_TWO',
                'example-three': 'EXAMPLE_THREE',
                'Example-Four': 'EXAMPLE_FOUR',
                'EXAMPLE-FIVE': 'EXAMPLE_FIVE',
                'EXAMPLE_SIX': 'EXAMPLE_SIX',
                'example_Seven-extra': 'EXAMPLE_SEVEN_EXTRA',
                'example_eight': 'EXAMPLE_EIGHT',
                '_example_underscoreOne': '_EXAMPLE_UNDERSCORE_ONE',
                '___example_underscoreTwo': '___EXAMPLE_UNDERSCORE_TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperSnakeCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_SNAKE_CASE));
            }
        });
        it('into upper snake case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_EXAMPLE_ONE',
                '_exampleTwo': '_EXAMPLE_TWO',
                '____example-three': '____EXAMPLE_THREE',
                '_Example-Four': '_EXAMPLE_FOUR',
                '__EXAMPLE-FIVE': '__EXAMPLE_FIVE',
                '___EXAMPLE_SIX': '___EXAMPLE_SIX',
                '_____example_Seven-extra': '_____EXAMPLE_SEVEN_EXTRA',
                '__example_eight': '__EXAMPLE_EIGHT',
                '_example_underscoreOne': '_EXAMPLE_UNDERSCORE_ONE',
                '___example_underscoreTwo': '___EXAMPLE_UNDERSCORE_TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperSnakeCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_SNAKE_CASE));
            }
        });
        it('into upper snake case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'EXAMPLE_ONE',
                '_exampleTwo': 'EXAMPLE_TWO',
                '____example-three': 'EXAMPLE_THREE',
                '_Example-Four': 'EXAMPLE_FOUR',
                '__EXAMPLE-FIVE': 'EXAMPLE_FIVE',
                '___EXAMPLE_SIX': 'EXAMPLE_SIX',
                'example_Seven-extra': 'EXAMPLE_SEVEN_EXTRA',
                '__example_eight': 'EXAMPLE_EIGHT',
                '_example_underscoreOne': 'EXAMPLE_UNDERSCORE_ONE',
                '___example_underscoreTwo': 'EXAMPLE_UNDERSCORE_TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperSnakeCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_SNAKE_CASE, false));
            }
        });
    });
    
    describe('pascal case conversions: ', function () {
        it('default into pascal case', function () {
            const conversion_examples = {
                'ExampleOne': 'ExampleOne',
                'exampleTwo': 'ExampleTwo',
                'example-three': 'ExampleThree',
                'Example-Four': 'ExampleFour',
                'EXAMPLE-FIVE': 'ExampleFive',
                'EXAMPLE_SIX': 'ExampleSix',
                'example_Seven-extra': 'ExampleSevenExtra',
                'example_eight': 'ExampleEight',
                '_example_underscoreOne': '_ExampleUnderscoreOne',
                '___example_underscoreTwo': '___ExampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toPascalCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.PASCAL_CASE));
            }
        });
        it('into pascal case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_ExampleOne',
                '_exampleTwo': '_ExampleTwo',
                '____example-three': '____ExampleThree',
                '_Example-Four': '_ExampleFour',
                '__EXAMPLE-FIVE': '__ExampleFive',
                '___EXAMPLE_SIX': '___ExampleSix',
                '_____example_Seven-extra': '_____ExampleSevenExtra',
                '__example_eight': '__ExampleEight',
                '_example_underscoreOne': '_ExampleUnderscoreOne',
                '___example_underscoreTwo': '___ExampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toPascalCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.PASCAL_CASE));
            }
        });
        it('into pascal case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'ExampleOne',
                '_exampleTwo': 'ExampleTwo',
                '____example-three': 'ExampleThree',
                '_Example-Four': 'ExampleFour',
                '__EXAMPLE-FIVE': 'ExampleFive',
                '___EXAMPLE_SIX': 'ExampleSix',
                'example_Seven-extra': 'ExampleSevenExtra',
                '__example_eight': 'ExampleEight',
                '_example_underscoreOne': 'ExampleUnderscoreOne',
                '___example_underscoreTwo': 'ExampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toPascalCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.PASCAL_CASE, false));
            }
        });
    });
    
    describe('camel case conversions: ', function () {
        it('default into camel case', function () {
            const conversion_examples = {
                'ExampleOne': 'exampleOne',
                'exampleTwo': 'exampleTwo',
                'example-three': 'exampleThree',
                'Example-Four': 'exampleFour',
                'EXAMPLE-FIVE': 'exampleFive',
                'EXAMPLE_SIX': 'exampleSix',
                'example_Seven-extra': 'exampleSevenExtra',
                'example_eight': 'exampleEight',
                '_example_underscoreOne': '_exampleUnderscoreOne',
                '___example_underscoreTwo': '___exampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCamelCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.CAMEL_CASE));
            }
        });
        it('into camel case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_exampleOne',
                '_exampleTwo': '_exampleTwo',
                '____example-three': '____exampleThree',
                '_Example-Four': '_exampleFour',
                '__EXAMPLE-FIVE': '__exampleFive',
                '___EXAMPLE_SIX': '___exampleSix',
                '_____example_Seven-extra': '_____exampleSevenExtra',
                '__example_eight': '__exampleEight',
                '_example_underscoreOne': '_exampleUnderscoreOne',
                '___example_underscoreTwo': '___exampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCamelCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.CAMEL_CASE));
            }
        });
        it('into camel case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'exampleOne',
                '_exampleTwo': 'exampleTwo',
                '____example-three': 'exampleThree',
                '_Example-Four': 'exampleFour',
                '__EXAMPLE-FIVE': 'exampleFive',
                '___EXAMPLE_SIX': 'exampleSix',
                'example_Seven-extra': 'exampleSevenExtra',
                '__example_eight': 'exampleEight',
                '_example_underscoreOne': 'exampleUnderscoreOne',
                '___example_underscoreTwo': 'exampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCamelCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.CAMEL_CASE, false));
            }
        });
    });
    
    describe('dash case conversions: ', function () {
        it('default into dash case', function () {
            const conversion_examples = {
                'ExampleOne': 'example-one',
                'exampleTwo': 'example-two',
                'example-three': 'example-three',
                'Example-Four': 'example-four',
                'EXAMPLE-FIVE': 'example-five',
                'EXAMPLE_SIX': 'example-six',
                'example_Seven-extra': 'example-seven-extra',
                'example_eight': 'example-eight',
                '_example_underscoreOne': '_example-underscore-one',
                '___example_underscoreTwo': '___example-underscore-two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toDashCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.DASH_CASE));
            }
        });
        it('into dash case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_example-one',
                '_exampleTwo': '_example-two',
                '____example-three': '____example-three',
                '_Example-Four': '_example-four',
                '__EXAMPLE-FIVE': '__example-five',
                '___EXAMPLE_SIX': '___example-six',
                '_____example_Seven-extra': '_____example-seven-extra',
                '__example_eight': '__example-eight',
                '_example_underscoreOne': '_example-underscore-one',
                '___example_underscoreTwo': '___example-underscore-two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toDashCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.DASH_CASE));
            }
        });
        it('into dash case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'example-one',
                '_exampleTwo': 'example-two',
                '____example-three': 'example-three',
                '_Example-Four': 'example-four',
                '__EXAMPLE-FIVE': 'example-five',
                '___EXAMPLE_SIX': 'example-six',
                'example_Seven-extra': 'example-seven-extra',
                '__example_eight': 'example-eight',
                '_example_underscoreOne': 'example-underscore-one',
                '___example_underscoreTwo': 'example-underscore-two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toDashCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.DASH_CASE, false));
            }
        });
    });
    
    describe('upper dash case conversions: ', function () {
        it('default into upper dash case', function () {
            const conversion_examples = {
                'ExampleOne': 'EXAMPLE-ONE',
                'exampleTwo': 'EXAMPLE-TWO',
                'example-three': 'EXAMPLE-THREE',
                'Example-Four': 'EXAMPLE-FOUR',
                'EXAMPLE-FIVE': 'EXAMPLE-FIVE',
                'EXAMPLE_SIX': 'EXAMPLE-SIX',
                'example_Seven-extra': 'EXAMPLE-SEVEN-EXTRA',
                'example_eight': 'EXAMPLE-EIGHT',
                '_example_underscoreOne': '_EXAMPLE-UNDERSCORE-ONE',
                '___example_underscoreTwo': '___EXAMPLE-UNDERSCORE-TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperDashCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_DASH_CASE));
            }
        });
        it('into upper dash case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_EXAMPLE-ONE',
                '_exampleTwo': '_EXAMPLE-TWO',
                '____example-three': '____EXAMPLE-THREE',
                '_Example-Four': '_EXAMPLE-FOUR',
                '__EXAMPLE-FIVE': '__EXAMPLE-FIVE',
                '___EXAMPLE_SIX': '___EXAMPLE-SIX',
                '_____example_Seven-extra': '_____EXAMPLE-SEVEN-EXTRA',
                '__example_eight': '__EXAMPLE-EIGHT',
                '_example_underscoreOne': '_EXAMPLE-UNDERSCORE-ONE',
                '___example_underscoreTwo': '___EXAMPLE-UNDERSCORE-TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperDashCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_DASH_CASE));
            }
        });
        it('into upper dash case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'EXAMPLE-ONE',
                '_exampleTwo': 'EXAMPLE-TWO',
                '____example-three': 'EXAMPLE-THREE',
                '_Example-Four': 'EXAMPLE-FOUR',
                '__EXAMPLE-FIVE': 'EXAMPLE-FIVE',
                '___EXAMPLE_SIX': 'EXAMPLE-SIX',
                'example_Seven-extra': 'EXAMPLE-SEVEN-EXTRA',
                '__example_eight': 'EXAMPLE-EIGHT',
                '_example_underscoreOne': 'EXAMPLE-UNDERSCORE-ONE',
                '___example_underscoreTwo': 'EXAMPLE-UNDERSCORE-TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperDashCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_DASH_CASE, false));
            }
        });
    });
    
    describe('train case conversions: ', function () {
        it('default into train case', function () {
            const conversion_examples = {
                'ExampleOne': 'Example-One',
                'exampleTwo': 'Example-Two',
                'example-three': 'Example-Three',
                'Example-Four': 'Example-Four',
                'EXAMPLE-FIVE': 'Example-Five',
                'EXAMPLE_SIX': 'Example-Six',
                'example_Seven-extra': 'Example-Seven-Extra',
                'example_eight': 'Example-Eight',
                '_example_underscoreOne': '_Example-Underscore-One',
                '___example_underscoreTwo': '___Example-Underscore-Two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toTrainCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.TRAIN_CASE));
            }
        });
        it('into train case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_Example-One',
                '_exampleTwo': '_Example-Two',
                '____example-three': '____Example-Three',
                '_Example-Four': '_Example-Four',
                '__EXAMPLE-FIVE': '__Example-Five',
                '___EXAMPLE_SIX': '___Example-Six',
                '_____example_Seven-extra': '_____Example-Seven-Extra',
                '__example_eight': '__Example-Eight',
                '_example_underscoreOne': '_Example-Underscore-One',
                '___example_underscoreTwo': '___Example-Underscore-Two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toTrainCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.TRAIN_CASE));
            }
        });
        it('into train case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'Example-One',
                '_exampleTwo': 'Example-Two',
                '____example-three': 'Example-Three',
                '_Example-Four': 'Example-Four',
                '__EXAMPLE-FIVE': 'Example-Five',
                '___EXAMPLE_SIX': 'Example-Six',
                'example_Seven-extra': 'Example-Seven-Extra',
                '__example_eight': 'Example-Eight',
                '_example_underscoreOne': 'Example-Underscore-One',
                '___example_underscoreTwo': 'Example-Underscore-Two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toTrainCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.TRAIN_CASE, false));
            }
        });
    });
    
    describe('word case conversions: ', function () {
        it('default into word case', function () {
            const conversion_examples = {
                'ExampleOne': 'example one',
                'exampleTwo': 'example two',
                'example-three': 'example three',
                'Example-Four': 'example four',
                'EXAMPLE-FIVE': 'example five',
                'EXAMPLE_SIX': 'example six',
                'example_Seven-extra': 'example seven extra',
                'example_eight': 'example eight',
                '_example_underscoreOne': '_example underscore one',
                '___example_underscoreTwo': '___example underscore two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toWordCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.WORD_CASE));
            }
        });
        it('into word case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_example one',
                '_exampleTwo': '_example two',
                '____example-three': '____example three',
                '_Example-Four': '_example four',
                '__EXAMPLE-FIVE': '__example five',
                '___EXAMPLE_SIX': '___example six',
                '_____example_Seven-extra': '_____example seven extra',
                '__example_eight': '__example eight',
                '_example_underscoreOne': '_example underscore one',
                '___example_underscoreTwo': '___example underscore two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toWordCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.WORD_CASE));
            }
        });
        it('into word case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'example one',
                '_exampleTwo': 'example two',
                '____example-three': 'example three',
                '_Example-Four': 'example four',
                '__EXAMPLE-FIVE': 'example five',
                '___EXAMPLE_SIX': 'example six',
                'example_Seven-extra': 'example seven extra',
                '__example_eight': 'example eight',
                '_example_underscoreOne': 'example underscore one',
                '___example_underscoreTwo': 'example underscore two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toWordCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.WORD_CASE, false));
            }
        });
    });
    
    describe('upper word case conversions: ', function () {
        it('default into upper word case', function () {
            const conversion_examples = {
                'ExampleOne': 'EXAMPLE ONE',
                'exampleTwo': 'EXAMPLE TWO',
                'example-three': 'EXAMPLE THREE',
                'Example-Four': 'EXAMPLE FOUR',
                'EXAMPLE-FIVE': 'EXAMPLE FIVE',
                'EXAMPLE_SIX': 'EXAMPLE SIX',
                'example_Seven-extra': 'EXAMPLE SEVEN EXTRA',
                'example_eight': 'EXAMPLE EIGHT',
                '_example_underscoreOne': '_EXAMPLE UNDERSCORE ONE',
                '___example_underscoreTwo': '___EXAMPLE UNDERSCORE TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperWordCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_WORD_CASE));
            }
        });
        it('into upper word case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_EXAMPLE ONE',
                '_exampleTwo': '_EXAMPLE TWO',
                '____example-three': '____EXAMPLE THREE',
                '_Example-Four': '_EXAMPLE FOUR',
                '__EXAMPLE-FIVE': '__EXAMPLE FIVE',
                '___EXAMPLE_SIX': '___EXAMPLE SIX',
                '_____example_Seven-extra': '_____EXAMPLE SEVEN EXTRA',
                '__example_eight': '__EXAMPLE EIGHT',
                '_example_underscoreOne': '_EXAMPLE UNDERSCORE ONE',
                '___example_underscoreTwo': '___EXAMPLE UNDERSCORE TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperWordCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_WORD_CASE));
            }
        });
        it('into upper word case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'EXAMPLE ONE',
                '_exampleTwo': 'EXAMPLE TWO',
                '____example-three': 'EXAMPLE THREE',
                '_Example-Four': 'EXAMPLE FOUR',
                '__EXAMPLE-FIVE': 'EXAMPLE FIVE',
                '___EXAMPLE_SIX': 'EXAMPLE SIX',
                'example_Seven-extra': 'EXAMPLE SEVEN EXTRA',
                '__example_eight': 'EXAMPLE EIGHT',
                '_example_underscoreOne': 'EXAMPLE UNDERSCORE ONE',
                '___example_underscoreTwo': 'EXAMPLE UNDERSCORE TWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toUpperWordCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.UPPER_WORD_CASE, false));
            }
        });
    });
    
    describe('capital word case conversions: ', function () {
        it('default into capital word case', function () {
            const conversion_examples = {
                'ExampleOne': 'Example One',
                'exampleTwo': 'Example Two',
                'example-three': 'Example Three',
                'Example-Four': 'Example Four',
                'EXAMPLE-FIVE': 'Example Five',
                'EXAMPLE_SIX': 'Example Six',
                'example_Seven-extra': 'Example Seven Extra',
                'example_eight': 'Example Eight',
                '_example_underscoreOne': '_Example Underscore One',
                '___example_underscoreTwo': '___Example Underscore Two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCapitalWordCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.CAPITAL_WORD_CASE));
            }
        });
        it('into capital word case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_Example One',
                '_exampleTwo': '_Example Two',
                '____example-three': '____Example Three',
                '_Example-Four': '_Example Four',
                '__EXAMPLE-FIVE': '__Example Five',
                '___EXAMPLE_SIX': '___Example Six',
                '_____example_Seven-extra': '_____Example Seven Extra',
                '__example_eight': '__Example Eight',
                '_example_underscoreOne': '_Example Underscore One',
                '___example_underscoreTwo': '___Example Underscore Two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCapitalWordCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.CAPITAL_WORD_CASE));
            }
        });
        it('into capital word case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'Example One',
                '_exampleTwo': 'Example Two',
                '____example-three': 'Example Three',
                '_Example-Four': 'Example Four',
                '__EXAMPLE-FIVE': 'Example Five',
                '___EXAMPLE_SIX': 'Example Six',
                'example_Seven-extra': 'Example Seven Extra',
                '__example_eight': 'Example Eight',
                '_example_underscoreOne': 'Example Underscore One',
                '___example_underscoreTwo': 'Example Underscore Two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCapitalWordCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.CAPITAL_WORD_CASE, false));
            }
        });
    });
    
    describe('sentence case conversions: ', function () {
        it('default into sentence case', function () {
            const conversion_examples = {
                'ExampleOne': 'Example one',
                'exampleTwo': 'Example two',
                'example-three': 'Example three',
                'Example-Four': 'Example four',
                'EXAMPLE-FIVE': 'Example five',
                'EXAMPLE_SIX': 'Example six',
                'example_Seven-extra': 'Example seven extra',
                'example_eight': 'Example eight',
                '_example_underscoreOne': '_Example underscore one',
                '___example_underscoreTwo': '___Example underscore two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toSentenceCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.SENTENCE_CASE));
            }
        });
        it('into sentence case with preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_Example one',
                '_exampleTwo': '_Example two',
                '____example-three': '____Example three',
                '_Example-Four': '_Example four',
                '__EXAMPLE-FIVE': '__Example five',
                '___EXAMPLE_SIX': '___Example six',
                '_____example_Seven-extra': '_____Example seven extra',
                '__example_eight': '__Example eight',
                '_example_underscoreOne': '_Example underscore one',
                '___example_underscoreTwo': '___Example underscore two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toSentenceCase(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.SENTENCE_CASE));
            }
        });
        it('into sentence case without preserving underscores', function () {
            const conversion_examples = {
                '_ExampleOne': 'Example one',
                '_exampleTwo': 'Example two',
                '____example-three': 'Example three',
                '_Example-Four': 'Example four',
                '__EXAMPLE-FIVE': 'Example five',
                '___EXAMPLE_SIX': 'Example six',
                'example_Seven-extra': 'Example seven extra',
                '__example_eight': 'Example eight',
                '_example_underscoreOne': 'Example underscore one',
                '___example_underscoreTwo': 'Example underscore two',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toSentenceCase(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.convertCase(source, LuckyCase.SENTENCE_CASE, false));
            }
        });
    });
    
    describe('capital conversions: ', function () {
        it('default into capital', function () {
            const conversion_examples = {
                'ExampleOne': 'ExampleOne',
                'exampleTwo': 'ExampleTwo',
                'example-three': 'Example-three',
                'Example-Four': 'Example-Four',
                'EXAMPLE-FIVE': 'EXAMPLE-FIVE',
                'EXAMPLE_SIX': 'EXAMPLE_SIX',
                'example_Seven-extra': 'Example_Seven-extra',
                'example_eight': 'Example_eight',
                '_example_underscoreOne': '_example_underscoreOne',
                '___example_underscoreTwo': '___example_underscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCapital(source);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.capitalize(source));
            }
        });
        it('into capital with skipping underscores', function () {
            const conversion_examples = {
                'ExampleOne': 'ExampleOne',
                'exampleTwo': 'ExampleTwo',
                'example-three': 'Example-three',
                'Example-Four': 'Example-Four',
                'EXAMPLE-FIVE': 'EXAMPLE-FIVE',
                'EXAMPLE_SIX': 'EXAMPLE_SIX',
                'example_Seven-extra': 'Example_Seven-extra',
                'example_eight': 'Example_eight',
                '_example_underscoreOne': '_Example_underscoreOne',
                '___example_underscoreTwo': '___Example_underscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCapital(source, true);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.capitalize(source, true));
            }
        });
        it('into capital without explicitly skipping underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_ExampleOne',
                '_exampleTwo': '_exampleTwo',
                '____example-three': '____example-three',
                '_Example-Four': '_Example-Four',
                '__EXAMPLE-FIVE': '__EXAMPLE-FIVE',
                '___EXAMPLE_SIX': '___EXAMPLE_SIX',
                'example_Seven-extra': 'Example_Seven-extra',
                '__example_eight': '__example_eight',
                '_example_underscoreOne': '_example_underscoreOne',
                '___example_underscoreTwo': '___example_underscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                const result = LuckyCase.toCapital(source, false);
                expect(result).toEqual(expected_result);
                expect(result).toEqual(LuckyCase.capitalize(source, false));
            }
        });
    });

    describe('mixed case conversions: ', function () {
        it('default into mixed case', function () {
            const conversion_examples = [
                'ExampleOne',
                'exampleTwo',
                'example-three',
                'Example-Four',
                'EXAMPLE-FIVE',
                'EXAMPLE_SIX',
                'example_Seven-extra',
                'example_eight',
                '_example_underscoreOne',
                '___example_underscoreTwo',
            ]
            for(let source of conversion_examples) {
                const result = LuckyCase.toMixedCase(source);
                expect(result).not.toEqual(source);
                expect(LuckyCase.isMixedCase(result)).toEqual(true);
            }
        });
        it('into mixed case with preserving underscores', function () {
            const conversion_examples = [
                '_ExampleOne',
                '_exampleTwo',
                '____example-three',
                '_Example-Four',
                '__EXAMPLE-FIVE',
                '___EXAMPLE_SIX',
                '_____example_Seven-extra',
                '__example_eight',
                '_example_underscoreOne',
                '___example_underscoreTwo',
            ]
            for(let source of conversion_examples) {
                const result = LuckyCase.toMixedCase(source);
                expect(result).not.toEqual(source);
                expect(result[0]).toEqual('_');
                expect(LuckyCase.isMixedCase(result)).toEqual(true);
            }
        });
        it('into mixed case without preserving underscores', function () {
            const conversion_examples = [
                '_ExampleOne',
                '_exampleTwo',
                '____example-three',
                '_Example-Four',
                '__EXAMPLE-FIVE',
                '___EXAMPLE_SIX',
                'example_Seven-extra',
                '__example_eight',
                '_example_underscoreOne',
                '___example_underscoreTwo',
            ]
            for(let source of conversion_examples) {
                const result = LuckyCase.toMixedCase(source, false);
                expect(result).not.toEqual(source);
                expect(result[0]).not.toEqual('_');
                expect(LuckyCase.isMixedCase(result)).toEqual(true);
            }
        });
    });

    describe('invalid conversions: ', function () {
        it('into fantasia', function () {
            expect(() => {
                LuckyCase.convertCase('snake_case', 'FANTASIA_CASE');
            }).toThrowError(InvalidCaseError);
        });
    });
    
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.cases', function () {
    beforeEach(function () {
    });
    describe('detect cases: ', function () {
        it('detects several cases in lower case string', function () {
            const r = LuckyCase.cases('lotofcases').sort();
            expect(r).toEqual(['SNAKE_CASE', 'DASH_CASE', 'CAMEL_CASE', 'WORD_CASE'].sort());
        });
        it('detects several cases in upper case string', function () {
            const r = LuckyCase.cases('LOTOFCASES').sort();
            expect(r).toEqual(['PASCAL_CASE', 'UPPER_SNAKE_CASE', 'UPPER_DASH_CASE', 'UPPER_WORD_CASE'].sort());
        });
        it('detects several cases in single word pascal case string', function () {
            const r = LuckyCase.cases('Single').sort();
            expect(r).toEqual(['PASCAL_CASE', 'TRAIN_CASE', 'SENTENCE_CASE', 'CAPITAL_WORD_CASE'].sort());
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.swapCase', function () {
    beforeEach(function () {
    });
    describe('swap cases: ', function () {
        it('swaps different examples without preserving prefixed underscores', function () {
            const conversion_examples = {
                'ExampleOne': 'eXAMPLEoNE',
                'exampleTwo': 'EXAMPLEtWO',
                'example-three': 'EXAMPLE_THREE',
                'Example-Four': 'eXAMPLE_fOUR',
                'EXAMPLE-FIVE': 'example_five',
                'EXAMPLE_SIX': 'example-six',
                'example_Seven-extra': 'EXAMPLE-sEVEN_EXTRA',
                'example_eight': 'EXAMPLE-EIGHT',
                '_example_underscoreOne': '-EXAMPLE-UNDERSCOREoNE',
                '___example_underscoreTwo': '---EXAMPLE-UNDERSCOREtWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                expect(LuckyCase.swapCase(source)).toEqual(expected_result);
            }
        });
        it('swaps different examples with preserving prefixed underscores', function () {
            const conversion_examples = {
                '_ExampleOne': '_eXAMPLEoNE',
                '_exampleTwo': '_EXAMPLEtWO',
                '____example-three': '____EXAMPLE_THREE',
                '_Example-Four': '_eXAMPLE_fOUR',
                '__EXAMPLE-FIVE': '__example_five',
                '___EXAMPLE_SIX': '___example-six',
                'example_Seven-extra': 'EXAMPLE-sEVEN_EXTRA',
                '__example_eight': '__EXAMPLE-EIGHT',
                '_example_underscoreOne': '_EXAMPLE-UNDERSCOREoNE',
                '___example_underscoreTwo': '___EXAMPLE-UNDERSCOREtWO',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                expect(LuckyCase.swapCase(source, true)).toEqual(expected_result);
            }
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.constantize', function () {
    beforeEach(function () {
    });
    describe('constantize cases: ', function () {
        it('constantizes several cases', function () {
            const conversion_examples = {
                'ExampleOne': 'ExampleOne',
                'exampleTwo': 'ExampleTwo',
                'example-three': 'ExampleThree',
                'Example-Four': 'ExampleFour',
                'EXAMPLE-FIVE': 'ExampleFive',
                'EXAMPLE_SIX': 'ExampleSix',
                'example_Seven-extra': 'ExampleSevenExtra',
                'example_eight': 'ExampleEight',
                '_example_underscoreOne': 'ExampleUnderscoreOne',
                '___example_underscoreTwo': 'ExampleUnderscoreTwo',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                eval(`global.${LuckyCase.toPascalCase(expected_result, false)} = function() {}`);
                expect(LuckyCase.constantize(source)).toEqual(eval(expected_result));
            }
        });
        it('constantizes several cases with paths', function () {
            const conversion_examples = {
                'example/one': 'ExampleOne',
                'exampleTwo': 'ExampleTwo',
                'example/three': 'ExampleThree',
                'ExampleFour': 'ExampleFour',
                '/test/man': 'TestMan',
                'dummy/village/': 'DummyVillage',
                'example_Seven-extra': 'ExampleSevenExtra',
                'example_eight': 'ExampleEight',
                '_example_underscoreOne': 'ExampleUnderscoreOne',
                '___example_underscoreTwo': 'ExampleUnderscoreTwo',
                'much/more/longer/example': 'MuchMoreLongerExample',
            }
            for(let source of Object.keys(conversion_examples)) {
                const expected_result = conversion_examples[source];
                eval(`global.${LuckyCase.toPascalCase(expected_result, false)} = function() {}`);
                expect(LuckyCase.constantize(source)).toEqual(eval(expected_result));
            }
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.deconstantize', function () {
    beforeEach(function () {
    });
    describe('deconstantize cases: ', function () {
        it('deconstantizes global constants', function () {
            expect(LuckyCase.deconstantize(TextEncoder)).toEqual('textEncoder');
            expect(LuckyCase.deconstantize(TextEncoder, LuckyCase.TRAIN_CASE)).toEqual('Text-Encoder');
            expect(LuckyCase.deconstantize(SharedArrayBuffer, LuckyCase.SNAKE_CASE)).toEqual('shared_array_buffer');
            expect(LuckyCase.deconstantize(SharedArrayBuffer)).toEqual('sharedArrayBuffer');
            expect(LuckyCase.deconstantize(String)).toEqual('string');
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.isValidCaseType', function () {
    beforeEach(function () {
    });
    describe('check valid case types:  ', function () {
        it("recognizes valid case type 'snake_case'", function () {
            expect(LuckyCase.isValidCaseType('SNAKE_CASE')).toEqual(true);
            expect(LuckyCase.isValidCaseType(LuckyCase.SNAKE_CASE)).toEqual(true);
        });
        it("recognizes valid case type 'upper_dash_case'", function () {
            expect(LuckyCase.isValidCaseType('UPPER_DASH_CASE')).toEqual(true);
            expect(LuckyCase.isValidCaseType(LuckyCase.UPPER_DASH_CASE)).toEqual(true);
        });
        it("recognizes all defined case types", function () {
            for(let key of Object.keys(LuckyCase.CASES)) {
                expect(LuckyCase.isValidCaseType(key)).toEqual(true);
            }
        });
    });
    describe('check invalid case types:  ', function () {
        it("does not recognize invalid case type 'apple_case'", function () {
            expect(LuckyCase.isValidCaseType('APPLE_CASE')).toEqual(false);
        });
        it("does not recognize invalid case type 'banana_case'", function () {
            expect(LuckyCase.isValidCaseType('BANANA_CASE')).toEqual(false);
        });
    });
});

//----------------------------------------------------------------------------------------------------

describe('LuckyCase.isValidCaseString', function () {
    beforeEach(function () {
    });
    describe('check valid case strings: ', function () {
        it("recognizes valid case string 'snake_case'", function () {
            expect(LuckyCase.isValidCaseString('snake_case')).toEqual(true);
        });
        it("recognizes valid case string 'UPPER-DASH-CASE'", function () {
            expect(LuckyCase.isValidCaseString('UPPER-DASH-CASE')).toEqual(true);
        });
        it("recognizes valid case string 'word case string'", function () {
            expect(LuckyCase.isValidCaseString('word case string')).toEqual(true);
        });
        it("recognizes valid case string 'some Mixed-case_string'", function () {
            expect(LuckyCase.isValidCaseString('some Mixed-case_string')).toEqual(true);
        });
    });
    describe('check invalid case strings: ', function () {
        it("does not recognize invalid case string '4pple Cais'", function () {
            expect(LuckyCase.isValidCaseString('4pple Cais')).toEqual(false);
        });
        it("does not recognize invalid case string '$pecial'", function () {
            expect(LuckyCase.isValidCaseString('$pecial')).toEqual(false);
        });
        it("does not recognize invalid case string ')(§/$=)?'", function () {
            expect(LuckyCase.isValidCaseString(')(§/$=)?')).toEqual(false);
        });
    });
});

//----------------------------------------------------------------------------------------------------