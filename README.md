# lucky-case

The lucky javascript library to identify and convert strings from any letter case to another. Plus some extra functions.

It's a port of my ruby gem [lucky_case](https://github.com/magynhard/lucky_case).

Useful when working with conventions, where class names, method names and file names needs to be converted.

* Converters: Only characters, numbers, dashes and underlines are allowed inside a string.
* Must not start with dash or number, underlines at the beginning are allowed by default and can be allowed/removed/controlled by parameter (when used for private methods for example)

# Contents

* [Usage](#usage)
* [Installation](#installation)
* [Documentation](#documentation)
* [Contributing](#contributing)

<a name="usage"></a>
## Usage

You can either use the static LuckyCase class with its method or optionally monkey patch the String class.

### Approach 1: Using the static class
```javascript
// node js
const LuckyCase = require('lucky-case');
// browser
<script type="text/javascript" src="js/lib/lucky-case.min.js"></script>

// converters
LuckyCase.toSnakeCase('PascalToSnake')                  // => 'pascal_to_snake'
LuckyCase.toUpperSnakeCase('Train-To-Upper-Snake')      // => 'TRAIN_TO_UPPER_SNAKE'
LuckyCase.toPascalCase('snake_to_pascal')               // => 'SnakeToPascal'
LuckyCase.toCamelCase('dash-to-camel-case')             // => 'dashToCamelCase'
LuckyCase.toDashCase('PascalToDashCase')                // => 'pascal-to-dash-case'
LuckyCase.toUpperDashCase('PascalToUpperDash')          // => 'PASCAL-TO-UPPER-DASH'
LuckyCase.toTrainCase('snake_to_train_case')            // => 'Snake-To-Train-Case'
LuckyCase.toWordCase('PascalToWordCase')                // => 'pascal to word case'
LuckyCase.toUpperWordCase('PascalToUpperWord')          // => 'PASCAL TO UPPER WORD'
LuckyCase.toCapitalWordCase('snake_to_capital_word')    // => 'Snake To Capital Word'
LuckyCase.toSentenceCase('snake_to_sentence_case')      // => 'Snake to sentence case'
LuckyCase.toMixedCase('example_snake_string')           // => 'Example-snake_STRING'

// converter by type
LuckyCase.convertCase('some_snake', 'PASCAL_CASE')      // => 'SomeSnake'

// transformers
LuckyCase.toLowerCase('Some_FuckingShit')               // => 'some_fuckingshit'
LuckyCase.toUpperCase('Some_FuckingShit')               // => 'SOME_FUCKINGSHIT'
LuckyCase.toCapital('example')                          // => 'Example'
LuckyCase.capitalize('exAmple')                         // => 'ExAmple'
LuckyCase.decapitalize('ExAmple')                       // => 'exAmple'
LuckyCase.swapCase('SomeSwappy_Case-Example')           // => 'sOMEsWAPPY-cASE_eXAMPLE'
LuckyCase.constantize('some_constant')                  // => SomeConstant
LuckyCase.constantize('SOME_CONSTANT')                  // => SomeConstant
LuckyCase.constantize('some/path_example/folder')       // => SomePathExampleFolder
LuckyCase.deconstantize(SomeConstant)                   // => 'someConstant' // default caseType: 'CAMEL_CASE'
LuckyCase.deconstantize(SomeConstant, caseType: 'SNAKE_CASE')  // => 'some_constant'

// identifiers
LuckyCase.case('this_can_only_be_snake_case')           // => 'SNAKE_CASE'
LuckyCase.cases('validformultiple')                     // => [ 'SNAKE_CASE', 'CAMEL_CASE', 'DASH_CASE', 'WORD_CASE' ]

// checkers
LuckyCase.isSnakeCase('valid_snake_case')               // => true
LuckyCase.isUpperSnakeCase('UPPER_SNAKE')               // => true
LuckyCase.isPascalCase('PascalCase')                    // => true
LuckyCase.isCamelCase('toCamelCase')                    // => true
LuckyCase.isDashCase('dash-case')                       // => true
LuckyCase.isUpperDashCase('DASH-CASE')                  // => true
LuckyCase.isTrainCase('Train-Case')                     // => true
LuckyCase.isWordCase('word case')                       // => true
LuckyCase.isUpperWordCase('UPPER WORD CASE')            // => true
LuckyCase.isCapitalWordCase('Capital Word Case')        // => true
LuckyCase.isSentenceCase('Sentence case string')        // => true
LuckyCase.isMixedCase('mixed_Case')                     // => true
LuckyCase.isUpperCase('UPPER50984')                     // => true
LuckyCase.isLowerCase('lower_cheese')                   // => true
LuckyCase.isCapital('Some')                             // => true
LuckyCase.isCapitalized('some')                         // => false
LuckyCase.isNotCapital('soMe')                          // => true
LuckyCase.isDecapitalized('somE')                       // => true
LuckyCase.isValidCaseType('SNAKE_CASE')                 // => true
LuckyCase.isValidCaseType('APPLE_CASE')                 // => false
LuckyCase.isValidCaseString('validString')              // => true
LuckyCase.isValidCaseString('1nV4lid$tring')            // => false
```

### Approach 2: Monkey patch the string class

With monkey patching you can access the same methods (except `deconstantize`, `isValidCaseType`) of LuckyCase directly from strings.

Because the methods `case` and `cases` are so general and could lead to conflicts, they are called `letterCase` and `letterCases` at strings.

```javascript
// node js
const LuckyCase = require('lucky-case/string');
// browser
<script type="text/javascript" src="js/lib/lucky-case.string.min.js"></script>

let a = 'ExampleString'

a.isPascalCase()                        // => true
a.toSnakeCase()                         // => 'example_string'
a                                       // => 'ExampleString'

// identifiers
// got a other method name here because 'case' might be to common and cause conflicts
b = 'example'
b.letterCase()                          // => 'SNAKE_CASE'
b.letterCases()                         // => [ 'SNAKE_CASE', 'CAMEL_CASE', 'DASH_CASE', 'WORD_CASE' ]
```





<a name="installation"></a>
## Installation

### Option 1: node js yarn

In your project root directory execute the following command:
```bash
yarn add lucky-case
```

### Option 2: node js npm

In your project root directory execute the following command:
```bash
npm install lucky-case
```

### Option 3: Browser

Download the `lucky-case.min.js` or `lucky-case.string.min.js` (string monkey patching version) from the folder `dist` and
put it in an appropriate folder, e.g. `js/lib`
and reference it with an script tag in your project:
```html
<script type="text/javascript" src="js/lib/lucky-case.min.js"></script>
```

Optionally you then should add the source file to your build pipeline, if you are using webpack, brunch or any other packager.

  
<a name="documentation"></a>    
## Documentation
Check out the *jsdoc* documentations:
* [LuckyCase static class version](doc/lucky-case.jsdoc.md)
* [LuckyCase string monkey patched version](doc/lucky-case-string.jsdoc.md)





<a name="contributing"></a>    
## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/magynhard/lucky-case. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

