/**
 * Functions/literals I often reach for.
 *
 * [![Build Status](https://img.shields.io/travis/a-marquez/js-utilities/master.svg?style=flat-square)](https://travis-ci.org/a-marquez/js-utilities)
 *
 * @module js-utilities
 * @typicalname utils
 * @example
 * npm install a-marquez/js-utilities
 * import * as utils from 'js-utilities'
 * import {stringifyPretty} from 'js-utilities'
 */

/**
 * RegEx literal to match domains.
 */
export const domainRegex = /(?:https?)?(?::\/\/)?(?:www\.)?([\w.]+)/

/**
 * Log a value and return it, useful within function compositions.
 *
 * @param {any} _
 * @returns {any}
 */
export function log (_: any): any {
  console.log(_)
  return _
}

/**
 * Use a debugger statement and return any passed value, useful within function compositions.
 *
 * @param {any} _
 * @returns {any}
 */
export function debug (_: any): any {
  debugger
  return _
}

/**
 * JSON stringify a value with pretty settings.
 *
 * @param {any} _
 * @returns {string}
 */
export function stringifyPretty (_: any): string {
  return JSON.stringify(_, null, 2)
}

/**
 * Return the current Unix Epoch Time in seconds.
 *
 * @returns {number}
 */
export function getUnixEpochSeconds (): number {
  return Math.floor(Date.now() / 1000)
}

/**
 * Curry a function.
 *
 * @see https://gist.github.com/Couto/35e177283855b874d8a6
 * @param {Function} fn
 * @returns {Function}
 */
export function curry (fn: Function): Function {
  return function cf (...args) {
    return (args.length >= fn.length) ?
      fn(...args) :
      (...newArgs) => cf(...[...args, ...newArgs])
  }
}

/**
 * Compose functions.
 *
 * @see https://gist.github.com/dtipson/140a69d25b8c81fe7de8
 * @param {Function} fn
 * @param {Function[]} ...rest
 * @returns {Function}
 */
export function compose (fn: Function, ...rest: Function[]): Function {
  return rest.length === 0 ?
    fn :
    // @ts-ignore
    (...args) => fn(compose(...rest)(...args))
}

/**
 * Bind all functions by name to given context.
 *
 * @param {any} context
 * @param {string[]} contextFnNames
 * @returns {void}
 */
export function contextBindFns (context: any , contextFnNames: string[]): void {
  contextFnNames.forEach((fnName) => { context[fnName] = context[fnName].bind(context) })
}
