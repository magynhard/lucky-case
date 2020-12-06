


describe('String.splitCaseString', function () {
    beforeEach(function () {
        require('../src/lucky-case/string.js');
    });
    describe('Splitting variants without prefixed underscores: ', function () {
        it('can split snake case', function () {
            const result = 'toSnakeCase'.toSnakeCase();
            expect(result).toEqual('to_snake_case');
        });
    });
});
