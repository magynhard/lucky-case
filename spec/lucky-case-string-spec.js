


describe('String', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/lucky-case/string.js');
    });
    describe('Test Conversions', function () {
        it('converts into several cases', function () {
            expect("TestCase".toSnakeCase()).toEqual('test_case');
            expect("TestCase".toUpperSnakeCase()).toEqual('TEST_CASE');
            expect("test_case".toPascalCase()).toEqual('TestCase');
            expect("test-case".toCamelCase()).toEqual('testCase');
            expect("TestCaseMore".toDashCase()).toEqual('test-case-more');
            expect("TestCaseMore".toUpperDashCase()).toEqual('TEST-CASE-MORE');
            expect("TestCaseMore".toTrainCase()).toEqual('Test-Case-More');
            expect("TestCaseMore".toUpperCase()).toEqual('TESTCASEMORE');
            expect("TestCaseMore".toLowerCase()).toEqual('testcasemore');
            expect("TestCaseMore".swapCase()).toEqual('tESTcASEmORE');
            expect("Test-Case-More".swapCase()).toEqual('tEST_cASE_mORE');
            expect("test_Case-More".swapCase()).toEqual('TEST-cASE_mORE');
            expect("some".toCapital()).toEqual('Some');
            expect("some".capitalize()).toEqual('Some');
        });
        it('constantizes', function () {
            global.TestCaseString = 'salami';
            expect("TestCaseString".constantize()).toEqual('salami');
        });
        it('detects cases', function () {
            expect('snake_case_string'.letterCase()).toEqual('SNAKE_CASE');
            expect('UPPER_SNAKE_CASE_STRING'.letterCase()).toEqual('UPPER_SNAKE_CASE');
            expect('PascalCaseString'.letterCase()).toEqual('PASCAL_CASE');
            expect('camelCaseString'.letterCase()).toEqual('CAMEL_CASE');
            expect('dash-case-string'.letterCase()).toEqual('DASH_CASE');
            expect('UPPER-DASH-CASE-STRING'.letterCase()).toEqual('UPPER_DASH_CASE');
            expect('Train-Case-String'.letterCase()).toEqual('TRAIN_CASE');
            expect('mixed_Case-string'.letterCase()).toEqual('MIXED_CASE');
            expect('mi%&/xed_Case-string'.letterCase()).toEqual(null);
        });
        it('checks cases', function () {
            expect('snake_case_string'.isSnakeCase()).toEqual(true);
            expect('UPPER_SNAKE_CASE_STRING'.isUpperSnakeCase()).toEqual(true);
            expect('PascalCaseString'.isPascalCase()).toEqual(true);
            expect('camelCaseString'.isCamelCase()).toEqual(true);
            expect('dash-case-string'.isDashCase()).toEqual(true);
            expect('UPPER-DASH-CASE-STRING'.isUpperDashCase()).toEqual(true);
            expect('Train-Case-String'.isTrainCase()).toEqual(true);
            expect('mixed_Case-string'.isMixedCase()).toEqual(true);
        });
    });
});


describe('String.isValidCaseString', function () {
    beforeEach(function () {
        // require inside, to make not available in other tests but only here in this file
        require('../src/lucky-case/string.js');
    });
    describe('check valid case strings: ', function () {
        it("recognizes valid case string 'snake_case'", function () {
            expect("snake_case".isValidCaseString()).toEqual(true);
        });
        it("recognizes valid case string 'UPPER-DASH-CASE'", function () {
            expect("UPPER-DASH-CASE".isValidCaseString()).toEqual(true);
        });
        it("recognizes valid case string 'word case string'", function () {
            expect("word case string".isValidCaseString()).toEqual(true);
        });
        it("recognizes valid case string 'some Mixed-case_string'", function () {
            expect("some Mixed-case_string".isValidCaseString()).toEqual(true);
        });
    });
    describe('check invalid case strings: ', function () {
        it("does not recognize invalid case string '4pple Cais'", function () {
            expect("4pple Cais".isValidCaseString()).toEqual(false);
        });
        it("does not recognize invalid case string '$pecial'", function () {
            expect("$pecial".isValidCaseString()).toEqual(false);
        });
        it("does not recognize invalid case string ')(§/$=)?'", function () {
            expect(")(§/$=)?".isValidCaseString()).toEqual(false);
        });
    });
});
