<a name="String"></a>

## String
LuckyCase version to add methods directly to string by monkey patching

* [String](#String)
    * [.letterCase(allow_prefixed_underscores)](#String+letterCase) &rarr; <code>string</code> \| <code>null</code>
    * [.letterCases(allow_prefixed_underscores)](#String+letterCases) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.convertCase(case_type, preserve_prefixed_underscores)](#String+convertCase) &rarr; <code>string</code>
    * [.isValidCaseString()](#String+isValidCaseString) &rarr; <code>boolean</code>
    * [.toUpperCase()](#String+toUpperCase) &rarr; <code>string</code>
    * [.isUpperCase()](#String+isUpperCase) &rarr; <code>boolean</code>
    * [.toLowerCase()](#String+toLowerCase) &rarr; <code>string</code>
    * [.isLowerCase()](#String+isLowerCase) &rarr; <code>boolean</code>
    * [.toSnakeCase(preserve_prefixed_underscores)](#String+toSnakeCase) &rarr; <code>string</code>
    * [.isSnakeCase(allow_prefixed_underscores)](#String+isSnakeCase) &rarr; <code>boolean</code>
    * [.toUpperSnakeCase(preserve_prefixed_underscores)](#String+toUpperSnakeCase) &rarr; <code>string</code>
    * [.isUpperSnakeCase(allow_prefixed_underscores)](#String+isUpperSnakeCase) &rarr; <code>boolean</code>
    * [.toPascalCase(preserve_prefixed_underscores)](#String+toPascalCase) &rarr; <code>string</code>
    * [.isPascalCase(allow_prefixed_underscores)](#String+isPascalCase) &rarr; <code>boolean</code>
    * [.toCamelCase(preserve_prefixed_underscores)](#String+toCamelCase) &rarr; <code>string</code>
    * [.isCamelCase(allow_prefixed_underscores)](#String+isCamelCase) &rarr; <code>boolean</code>
    * [.toDashCase(preserve_prefixed_underscores)](#String+toDashCase) &rarr; <code>string</code>
    * [.isDashCase(allow_prefixed_underscores)](#String+isDashCase) &rarr; <code>boolean</code>
    * [.toUpperDashCase(preserve_prefixed_underscores)](#String+toUpperDashCase) &rarr; <code>string</code>
    * [.isUpperDashCase(allow_prefixed_underscores)](#String+isUpperDashCase) &rarr; <code>boolean</code>
    * [.toTrainCase(preserve_prefixed_underscores)](#String+toTrainCase) &rarr; <code>string</code>
    * [.isTrainCase(allow_prefixed_underscores)](#String+isTrainCase) &rarr; <code>boolean</code>
    * [.toWordCase(preserve_prefixed_underscores)](#String+toWordCase) &rarr; <code>string</code>
    * [.isWordCase(allow_prefixed_underscores)](#String+isWordCase) &rarr; <code>boolean</code>
    * [.toUpperWordCase(preserve_prefixed_underscores)](#String+toUpperWordCase) &rarr; <code>string</code>
    * [.isUpperWordCase(allow_prefixed_underscores)](#String+isUpperWordCase) &rarr; <code>boolean</code>
    * [.toCapitalWordCase(preserve_prefixed_underscores)](#String+toCapitalWordCase) &rarr; <code>string</code>
    * [.isCapitalWordCase(allow_prefixed_underscores)](#String+isCapitalWordCase) &rarr; <code>boolean</code>
    * [.toSentenceCase(preserve_prefixed_underscores)](#String+toSentenceCase) &rarr; <code>string</code>
    * [.isSentenceCase(allow_prefixed_underscores)](#String+isSentenceCase) &rarr; <code>boolean</code>
    * [.toCapital(skip_prefixed_underscores)](#String+toCapital) &rarr; <code>string</code>
    * [.capitalize(skip_prefixed_underscores)](#String+capitalize) &rarr; <code>string</code>
    * [.isCapital(skip_prefixed_underscores)](#String+isCapital) &rarr; <code>boolean</code>
    * [.isCapitalized(skip_prefixed_underscores)](#String+isCapitalized) &rarr; <code>boolean</code>
    * [.toMixedCase(preserve_prefixed_underscores)](#String+toMixedCase) &rarr; <code>string</code>
    * [.isMixedCase(allow_prefixed_underscores)](#String+isMixedCase) &rarr; <code>boolean</code>
    * [.swapCase(preserve_prefixed_underscores)](#String+swapCase) &rarr; <code>string</code>
    * [.constantize()](#String+constantize) &rarr; <code>any</code>

<a name="String+letterCase"></a>

### string.letterCase(allow_prefixed_underscores) &rarr; <code>string</code> \| <code>null</code>
Get type of case of string (one key of LuckyCase.CASES)

If more than one case matches, the first match wins.
Match prio is the order of the regex in LuckyCase.CASES

If you want or need to know all cases, use plural version of this method

If you want to check explicitly for one case, use its check method,
e.g. isSnakeCase(..) for 'SNAKE_CASE', etc...
**Returns**: <code>string</code> \| <code>null</code> - string of caseType, null if no match  

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+letterCases"></a>

### string.letterCases(allow_prefixed_underscores) &rarr; <code>Array.&lt;string&gt;</code> \| <code>null</code>
Get types of cases of string (keys of LuckyCase.CASES)

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+convertCase"></a>

### string.convertCase(case_type, preserve_prefixed_underscores) &rarr; <code>string</code>
Convert a string into the given case type

| Param | Type | Default |
| --- | --- | --- |
| case_type | <code>string</code> |  | 
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+isValidCaseString"></a>

### string.isValidCaseString() &rarr; <code>boolean</code>
Check if the string matches any of the available cases
<a name="String+toUpperCase"></a>

### string.toUpperCase() &rarr; <code>string</code>
Convert all characters inside the string
into upper case
**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS-ISANEXAMPLE_STRING'
```
<a name="String+isUpperCase"></a>

### string.isUpperCase() &rarr; <code>boolean</code>
Check if all characters inside the string are upper case
<a name="String+toLowerCase"></a>

### string.toLowerCase() &rarr; <code>string</code>
Convert all characters inside the string
into lower case
**Example**  
```js
conversion
     'this-isAnExample_string' => 'this-isanexample_string'
```
<a name="String+isLowerCase"></a>

### string.isLowerCase() &rarr; <code>boolean</code>
Check if all characters inside the string are lower case
<a name="String+toSnakeCase"></a>

### string.toSnakeCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into snake case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this_is_an_example_string'
```
<a name="String+isSnakeCase"></a>

### string.isSnakeCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is snake case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toUpperSnakeCase"></a>

### string.toUpperSnakeCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into upper snake case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS_IS_AN_EXAMPLE_STRING'
```
<a name="String+isUpperSnakeCase"></a>

### string.isUpperSnakeCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper snake case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toPascalCase"></a>

### string.toPascalCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into pascal case

| Param | Default |
| --- | --- |
| preserve_prefixed_underscores | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'ThisIsAnExampleString'
```
<a name="String+isPascalCase"></a>

### string.isPascalCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper pascal case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toCamelCase"></a>

### string.toCamelCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into camel case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'thisIsAnExampleString'
```
<a name="String+isCamelCase"></a>

### string.isCamelCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is camel case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toDashCase"></a>

### string.toDashCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into dash case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this-is-an-example-string'
```
<a name="String+isDashCase"></a>

### string.isDashCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is dash case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toUpperDashCase"></a>

### string.toUpperDashCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into upper dash case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS-IS-AN-EXAMPLE-STRING'
```
<a name="String+isUpperDashCase"></a>

### string.isUpperDashCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper dash case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toTrainCase"></a>

### string.toTrainCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into train case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This-Is-An-Example-String'
```
<a name="String+isTrainCase"></a>

### string.isTrainCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is train case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toWordCase"></a>

### string.toWordCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into word case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'this is an example string'
```
<a name="String+isWordCase"></a>

### string.isWordCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is word case

| Param | Default |
| --- | --- |
| allow_prefixed_underscores | <code>true</code> | 

<a name="String+toUpperWordCase"></a>

### string.toUpperWordCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into upper word case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS IS AN EXAMPLE STRING'
```
<a name="String+isUpperWordCase"></a>

### string.isUpperWordCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is upper word case

| Param | Default |
| --- | --- |
| allow_prefixed_underscores | <code>true</code> | 

<a name="String+toCapitalWordCase"></a>

### string.toCapitalWordCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into capital word case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This Is An Example String'
```
<a name="String+isCapitalWordCase"></a>

### string.isCapitalWordCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is capital word case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toSentenceCase"></a>

### string.toSentenceCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into sentence case

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This is an example string'
```
<a name="String+isSentenceCase"></a>

### string.isSentenceCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is sentence case

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+toCapital"></a>

### string.toCapital(skip_prefixed_underscores) &rarr; <code>string</code>
Convert the first character to capital

| Param | Type | Default |
| --- | --- | --- |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="String+capitalize"></a>

### string.capitalize(skip_prefixed_underscores) &rarr; <code>string</code>
Convert the first character to capital

| Param | Type | Default |
| --- | --- | --- |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="String+isCapital"></a>

### string.isCapital(skip_prefixed_underscores) &rarr; <code>boolean</code>
Check if the strings first character is a capital letter

| Param | Type | Default |
| --- | --- | --- |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="String+isCapitalized"></a>

### string.isCapitalized(skip_prefixed_underscores) &rarr; <code>boolean</code>
Check if the strings first character is a capital letter

| Param | Type | Default |
| --- | --- | --- |
| skip_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

<a name="String+toMixedCase"></a>

### string.toMixedCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Convert the string from any case
into mixed case.

The new string is ensured to be different from the input.

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'This-Is_anExample-string'
```
<a name="String+isMixedCase"></a>

### string.isMixedCase(allow_prefixed_underscores) &rarr; <code>boolean</code>
Check if the string is a valid mixed case (without special characters!)

| Param | Type | Default |
| --- | --- | --- |
| allow_prefixed_underscores | <code>boolean</code> | <code>true</code> | 

<a name="String+swapCase"></a>

### string.swapCase(preserve_prefixed_underscores) &rarr; <code>string</code>
Swaps character cases in string

lower case to upper case
upper case to lower case
dash to underscore
underscore to dash

| Param | Type | Default |
| --- | --- | --- |
| preserve_prefixed_underscores | <code>boolean</code> | <code>false</code> | 

**Example**  
```js
conversion
     'this-isAnExample_string' => 'THIS_ISaNeXAMPLE-STRING'
```
<a name="String+constantize"></a>

### string.constantize() &rarr; <code>any</code>
Convert the string from any case
into pascal case and casts it into a constant
**Example**  
```js
conversion
     'this-isAnExample_string' => ThisIsAnExampleString
     'this/is_an/example_path' => ThisIsAnExamplePath
```
