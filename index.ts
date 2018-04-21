/**
 * RegEx literal to match domains.
 */
export const domainRegex = /(?:https?)?(?::\/\/)?(?:www\.)?([\w.]+)/

/**
 * Log an object and return it.
 *
 * @param {any} _
 * @returns {any}
 */
export function log (_: any): any {
  console.log(_)
  return _
}

/**
 * Use a debugger statement and any passed object.
 *
 * @param {any} _
 * @returns {any}
 */
export function debug (_: any): any {
  debugger
  return _
}

/**
 * Bind all functions by name and context.
 *
 * @param {any} context
 * @param {string[]} contextFnNames
 * @returns {void}
 */
export function contextBindFns (context: any , contextFnNames: string[]): void {
  contextFnNames.forEach((fnName) => { context[fnName] = context[fnName].bind(context) })
}

/**
 * JSON stringify an object with pretty settings.
 *
 * @param {Object} _
 * @returns {string}
 */
export function stringifyPretty (_: Object): string {
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
