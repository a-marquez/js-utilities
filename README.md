<a name="module_js-utilities"></a>

## js-utilities
Functions/literals I often reach for.

[![Build Status](https://img.shields.io/travis/a-marquez/js-utilities/master.svg?style=flat-square)](https://travis-ci.org/a-marquez/js-utilities)

**Example**  
```js
npm install a-marquez/js-utilities
import * as utils from 'js-utilities'
import {stringifyPretty} from 'js-utilities'
```

* [js-utilities](#module_js-utilities)
    * [.domainRegex](#module_js-utilities.domainRegex)
    * [.log(_)](#module_js-utilities.log) ⇒ <code>any</code>
    * [.debug(_)](#module_js-utilities.debug) ⇒ <code>any</code>
    * [.stringifyPretty(_)](#module_js-utilities.stringifyPretty) ⇒ <code>string</code>
    * [.getUnixEpochSeconds()](#module_js-utilities.getUnixEpochSeconds) ⇒ <code>number</code>
    * [.curry(fn)](#module_js-utilities.curry) ⇒ <code>function</code>
    * [.compose(fn)](#module_js-utilities.compose) ⇒ <code>function</code>
    * [.contextBindFns(context, contextFnNames)](#module_js-utilities.contextBindFns) ⇒ <code>void</code>


* * *

<a name="module_js-utilities.domainRegex"></a>

### utils.domainRegex
RegEx literal to match domains.

**Kind**: static constant of [<code>js-utilities</code>](#module_js-utilities)  

* * *

<a name="module_js-utilities.log"></a>

### utils.log(_) ⇒ <code>any</code>
Log value and return it, useful within function compositions.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  

| Param | Type |
| --- | --- |
| _ | <code>any</code> | 


* * *

<a name="module_js-utilities.debug"></a>

### utils.debug(_) ⇒ <code>any</code>
Use a debugger statement and return any passed value, useful within function compositions.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  

| Param | Type |
| --- | --- |
| _ | <code>any</code> | 


* * *

<a name="module_js-utilities.stringifyPretty"></a>

### utils.stringifyPretty(_) ⇒ <code>string</code>
JSON stringify a value with pretty settings.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  

| Param | Type |
| --- | --- |
| _ | <code>any</code> | 


* * *

<a name="module_js-utilities.getUnixEpochSeconds"></a>

### utils.getUnixEpochSeconds() ⇒ <code>number</code>
Return the current Unix Epoch Time in seconds.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  

* * *

<a name="module_js-utilities.curry"></a>

### utils.curry(fn) ⇒ <code>function</code>
Curry a function.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  
**See**: https://gist.github.com/Couto/35e177283855b874d8a6  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 


* * *

<a name="module_js-utilities.compose"></a>

### utils.compose(fn) ⇒ <code>function</code>
Compose functions.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  
**See**: https://gist.github.com/dtipson/140a69d25b8c81fe7de8  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...rest | <code>Array.&lt;function()&gt;</code> | 


* * *

<a name="module_js-utilities.contextBindFns"></a>

### utils.contextBindFns(context, contextFnNames) ⇒ <code>void</code>
Bind all functions by name to given context.

**Kind**: static method of [<code>js-utilities</code>](#module_js-utilities)  

| Param | Type |
| --- | --- |
| context | <code>any</code> | 
| contextFnNames | <code>Array.&lt;string&gt;</code> | 


* * *

