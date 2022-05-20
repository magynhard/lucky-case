<a name="LuckyCase"></a>

## LuckyCase
LuckyCase

Convert and detect various letter cases in strings

* [LuckyCase](#LuckyCase)
    * [.getVersion()](#LuckyCase.getVersion) &rarr; <code>string</code>
    * [.case(string, allow_prefixed_underscores)](#LuckyCase.case) &rarr; <code>string</code> \| <code>null</code>
    * [.cases(string, allow_prefixed_underscores)](#LuckyCase.cases) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.convertCase(string, case_type, preserve_prefixed_underscores)](#LuckyCase.convertCase) &rarr; <code>string</code>
    * [.isValidCaseType(case_type)](#LuckyCase.isValidCaseType) &rarr; <code>boolean</code>
    * [.isValidCaseString(string)](#LuckyCase.isValidCaseString) &rarr; <code>boolean</code>
    * [.toUpperCase(string)](#LuckyCase.toUpperCase) &rarr; <code>string</code>
    * [.isUpperCase(string)](#LuckyCase.isUpperCase) &rarr; <code>boolean</code>
    * [.toLowerCase(string)](#LuckyCase.toLowerCase) &rarr; <code>string</code>
    * [.isLowerCase(string)](#LuckyCase.isLowerCase) &rarr; <code>boolean</code>
    * [.toSnakeCase(string, preserve_prefixed_underscores)](#LuckyCase.toSnakeCase) &rarr; <code>string</code>
    * [.isSnakeCase(string, allow_prefixed_underscores)](#LuckyCase.isSnakeCase) &rarr; <code>boolean</code>
    * [.toUpperSnakeCase(string, preserve_prefixed_underscores)](#LuckyCase.toUpperSnakeCase) &rarr; <code>string</code>
    * [.isUpperSnakeCase(string, allow_prefixed_underscores)](#LuckyCase.isUpperSnakeCase) &rarr; <code>boolean</code>
    * [.toPascalCase(string, preserve_prefixed_underscores)](#LuckyCase.toPascalCase) &rarr; <code>string</code>
    * [.isPascalCase(string, allow_prefixed_underscores)](#LuckyCase.isPascalCase) &rarr; <code>boolean</code>
    * [.toCamelCase(string, preserve_prefixed_underscores)](#LuckyCase.toCamelCase) &rarr; <code>string</code>
    * [.isCamelCase(string, allow_prefixed_underscores)](#LuckyCase.isCamelCase) &rarr; <code>boolean</code>
    * [.toDashCase(string, preserve_prefixed_underscores)](#LuckyCase.toDashCase) &rarr; <code>string</code>
    * [.isDashCase(string, allow_prefixed_underscores)](#LuckyCase.isDashCase) &rarr; <code>boolean</code>
    * [.toUpperDashCase(string, preserve_prefixed_underscores)](#LuckyCase.toUpperDashCase) &rarr; <code>string</code>
    * [.isUpperDashCase(string, allow_prefixed_underscores)](#LuckyCase.isUpperDashCase) &rarr; <code>boolean</code>
    * [.toTrainCase(string, preserve_prefixed_underscores)](#LuckyCase.toTrainCase) &rarr; <code>string</code>
    * [.isTrainCase(string, allow_prefixed_underscores)](#LuckyCase.isTrainCase) &rarr; <code>boolean</code>
    * [.toWordCase(string, preserve_prefixed_underscores)](#LuckyCase.toWordCase) &rarr; <code>string</code>
    * [.isWordCase(string, allow_prefixed_underscores)](#LuckyCase.isWordCase) &rarr; <code>boolean</code>
    * [.toUpperWordCase(string, preserve_prefixed_underscores)](#LuckyCase.toUpperWordCase) &rarr; <code>string</code>
    * [.isUpperWordCase(string, allow_prefixed_underscores)](#LuckyCase.isUpperWordCase) &rarr; <code>boolean</code>
    * [.toCapitalWordCase(string, preserve_prefixed_underscores)](#LuckyCase.toCapitalWordCase) &rarr; <code>string</code>
    * [.isCapitalWordCase(string, allow_prefixed_underscores)](#LuckyCase.isCapitalWordCase) &rarr; <code>boolean</code>
    * [.toSentenceCase(string, preserve_prefixed_underscores)](#LuckyCase.toSentenceCase) &rarr; <code>string</code>
    * [.isSentenceCase(string, allow_prefixed_underscores)](#LuckyCase.isSentenceCase) &rarr; <code>boolean</code>
    * [.toCapital(string, skip_prefixed_underscores)](#LuckyCase.toCapital) &rarr; <code>string</code>
    * [.capitalize(string, skip_prefixed_underscores)](#LuckyCase.capitalize) &rarr; <code>string</code>
    * [.isCapital(string, skip_prefixed_underscores)](#LuckyCase.isCapital) &rarr; <code>boolean</code>
    * [.isCapitalized(string, skip_prefixed_underscores)](#LuckyCase.isCapitalized) &rarr; <code>boolean</code>
    * [.decapitalize(string, skip_prefixed_underscores)](#LuckyCase.decapitalize) &rarr; <code>string</code>
    * [.isNotCapital(string, skip_prefixed_underscores)](#LuckyCase.isNotCapital) &rarr; <code>boolean</code>
    * [.isDecapitalized(string, skip_prefixed_underscores)](#LuckyCase.isDecapitalized) &rarr; <code>boolean</code>
    * [.toMixedCase(string, preserve_prefixed_underscores)](#LuckyCase.toMixedCase) &rarr; <code>string</code>
    * [.isMixedCase(string, allow_prefixed_underscores)](#LuckyCase.isMixedCase) &rarr; <code>boolean</code>
    * [.swapCase(string, preserve_prefixed_underscores)](#LuckyCase.swapCase) &rarr; <code>string</code>
    * [.constantize(string)](#LuckyCase.constantize) &rarr; <code>any</code>
    * [.deconstantize(constant, case_type)](#LuckyCase.deconstantize) &rarr; <code>string</code>
    * [.cutUnderscoresAtStart(string)](#LuckyCase.cutUnderscoresAtStart) &rarr; <code>string</code>
    * [.getUnderscoresAtStart(string)](#LuckyCase.getUnderscoresAtStart) &rarr; <code>string</code>
    * [.splitCaseString(string)](#LuckyCase.splitCaseString) &rarr; <code>Array.&lt;string&gt;</code>

<a name="LuckyCase.getVersion"></a>

### LuckyCase.getVersion() &rarr; <code>string</code>
Get the version of the used library
<a name="LuckyCase.case"></a>

### LuckyCase.case(string, allow_prefixed_underscores) &rarr; <code>string</code> \| <code>null</code>
Get type of case of string (one key of LuckyCase.CASES)

If more than one case matches, the first match wins.
Match prio is the order of the regex in LuckyCase.CASES

If you want or need to know all cases, use plural version of this method

If you want to check explicitly for one case, use its check method,
e.g. isSnakeCase() for SNAKE_CASE, etc...
**Returns**: <code>string</code> \| <code>null</code> - symbol of type, null if no match  

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="LuckyCase.cases"></a>

### LuckyCase.cases(string, allow_prefixed_underscores) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
Get types of cases of string (keys of LuckyCase.CASES)
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>null</code> - symbols of types, null if no one matches  

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="LuckyCase.convertCase"></a>

### LuckyCase.convertCase(string, case_type, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert a string into the given case type

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| case_type | <code>string</code> |  | can be UPPER_CASE or lower_case, e.g. 'SNAKE_CASE' or 'snake_case' |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.isValidCaseType"></a>

### LuckyCase.isValidCaseType(case_type) &rarr; <code>boolean</code>
Check if given case type is a valid case type

| Param | Type | Description |
| --- | --- | --- |
| case_type | <code>string</code> | to check |

<a name="LuckyCase.isValidCaseString"></a>

### LuckyCase.isValidCaseString(string) &rarr; <code>boolean</code>
Check if the string matches any of the available cases

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | to check |

<a name="LuckyCase.toUpperCase"></a>

### LuckyCase.toUpperCase(string) &rarr; <code>string</code>
Convert all characters inside the string
into upper case

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | to convert |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS-ISANEXAMPLE_STRING'
```
<a name="LuckyCase.isUpperCase"></a>

### LuckyCase.isUpperCase(string) &rarr; <code>boolean</code>
Check if all characters inside the string are upper case

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | to check |

<a name="LuckyCase.toLowerCase"></a>

### LuckyCase.toLowerCase(string) &rarr; <code>string</code>
Convert all characters inside the string
into lower case

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | to convert |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this-isanexample_string'
```
<a name="LuckyCase.isLowerCase"></a>

### LuckyCase.isLowerCase(string) &rarr; <code>boolean</code>
Check if all characters inside the string are lower case

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | to check |

<a name="LuckyCase.toSnakeCase"></a>

### LuckyCase.toSnakeCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into snake case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this_is_an_example_string'
```
<a name="LuckyCase.isSnakeCase"></a>

### LuckyCase.isSnakeCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is snake case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toUpperSnakeCase"></a>

### LuckyCase.toUpperSnakeCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into upper snake case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS_IS_AN_EXAMPLE_STRING'
```
<a name="LuckyCase.isUpperSnakeCase"></a>

### LuckyCase.isUpperSnakeCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper snake case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toPascalCase"></a>

### LuckyCase.toPascalCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into pascal case

| Param | Default | Description |
| --- | --- | --- |
| string |  | to convert |
| preserve_prefixed_underscores | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'ThisIsAnExampleString'
```
<a name="LuckyCase.isPascalCase"></a>

### LuckyCase.isPascalCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper pascal case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toCamelCase"></a>

### LuckyCase.toCamelCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into camel case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'thisIsAnExampleString'
```
<a name="LuckyCase.isCamelCase"></a>

### LuckyCase.isCamelCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is camel case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toDashCase"></a>

### LuckyCase.toDashCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into dash case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this-is-an-example-string'
```
<a name="LuckyCase.isDashCase"></a>

### LuckyCase.isDashCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is dash case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toUpperDashCase"></a>

### LuckyCase.toUpperDashCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into upper dash case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS-IS-AN-EXAMPLE-STRING'
```
<a name="LuckyCase.isUpperDashCase"></a>

### LuckyCase.isUpperDashCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper dash case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toTrainCase"></a>

### LuckyCase.toTrainCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into train case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This-Is-An-Example-String'
```
<a name="LuckyCase.isTrainCase"></a>

### LuckyCase.isTrainCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is train case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toWordCase"></a>

### LuckyCase.toWordCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into word case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this is an example string'
```
<a name="LuckyCase.isWordCase"></a>

### LuckyCase.isWordCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is word case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores |  | <code>true</code> |  |

<a name="LuckyCase.toUpperWordCase"></a>

### LuckyCase.toUpperWordCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into upper word case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS IS AN EXAMPLE STRING'
```
<a name="LuckyCase.isUpperWordCase"></a>

### LuckyCase.isUpperWordCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper word case

| Param | Default | Description |
| --- | --- | --- |
| string |  | to check |
| allow_prefixed_underscores | <code>true</code> |  |

<a name="LuckyCase.toCapitalWordCase"></a>

### LuckyCase.toCapitalWordCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into capital word case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This Is An Example String'
```
<a name="LuckyCase.isCapitalWordCase"></a>

### LuckyCase.isCapitalWordCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is capital word case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toSentenceCase"></a>

### LuckyCase.toSentenceCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into sentence case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This is an example string'
```
<a name="LuckyCase.isSentenceCase"></a>

### LuckyCase.isSentenceCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is sentence case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to check |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> |  |

<a name="LuckyCase.toCapital"></a>

### LuckyCase.toCapital(string, skip_prefixed_underscores) &rarr; <code>string</code>
Convert the first character to capital

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> |  |

<a name="LuckyCase.capitalize"></a>

### LuckyCase.capitalize(string, skip_prefixed_underscores) &rarr; <code>string</code>
Convert the first character to capital

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> |  |

<a name="LuckyCase.isCapital"></a>

### LuckyCase.isCapital(string, skip_prefixed_underscores) &rarr; <code>boolean</code>
Check if the strings first character is a capital letter

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="LuckyCase.isCapitalized"></a>

### LuckyCase.isCapitalized(string, skip_prefixed_underscores) &rarr; <code>boolean</code>
Check if the strings first character is a capital letter

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="LuckyCase.decapitalize"></a>

### LuckyCase.decapitalize(string, skip_prefixed_underscores) &rarr; <code>string</code>
Convert the first character to lower case

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | <code>string</code> |  | to convert |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> |  |

<a name="LuckyCase.isNotCapital"></a>

### LuckyCase.isNotCapital(string, skip_prefixed_underscores) &rarr; <code>boolean</code>
Check if the strings first character is a lower case letter

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="LuckyCase.isDecapitalized"></a>

### LuckyCase.isDecapitalized(string, skip_prefixed_underscores) &rarr; <code>boolean</code>
Check if the strings first character is a lower case letter

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="LuckyCase.toMixedCase"></a>

### LuckyCase.toMixedCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the given string from any case
into mixed case.

The new string is ensured to be different from the input.

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This-Is_anExample-string'
```
<a name="LuckyCase.isMixedCase"></a>

### LuckyCase.isMixedCase(string, allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is a valid mixed case (without special characters!)

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="LuckyCase.swapCase"></a>

### LuckyCase.swapCase(string, preserve_prefixed_underscores) &rarr; <code>string</code>
Swaps character cases in string

lower case to upper case
upper case to lower case
dash to underscore
underscore to dash

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| preserve_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS_ISaNeXAMPLE-STRING'
```
<a name="LuckyCase.constantize"></a>

### LuckyCase.constantize(string) &rarr; <code>any</code>
Convert the string from any case
into pascal case and casts it into a constant

Does not work in all node js contexts because of scopes, where the constant is not available here.
Then you might use eval(LuckyCase.toPascalCase) instead.
Or you may use it with global defined variables, global.<variable_name>

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => ThisIsAnExampleString
     'this/is_an/example_path' => ThisIsAnExamplePath
```
<a name="LuckyCase.deconstantize"></a>

### LuckyCase.deconstantize(constant, case_type) &rarr; <code>string</code>
Deconverts the constant back into specified target type

Does not work in special scopes in node js

| Param | Type |
| --- | --- |
| constant | <code>function</code> | 
| case_type | <code>string</code> | 

**Example**  
```js
deconversion
     ThisAweSomeConstant => 'thisAweSomeConstant'
     function myFunction() {} => 'myFunction'
```
<a name="LuckyCase.cutUnderscoresAtStart"></a>

### LuckyCase.cutUnderscoresAtStart(string) &rarr; <code>string</code>
Return string without underscores at the start
**Returns**: <code>string</code> - string without prefixed underscores  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

<a name="LuckyCase.getUnderscoresAtStart"></a>

### LuckyCase.getUnderscoresAtStart(string) &rarr; <code>string</code>
Return the underscores at the start of the string
**Returns**: <code>string</code> - string of underscores or empty if none found  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

<a name="LuckyCase.splitCaseString"></a>

### LuckyCase.splitCaseString(string) &rarr; <code>Array.&lt;string&gt;</code>
Split the string into parts
It is splitted by all (different) case separators

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

