
/**
 * 数组是否相等
 * @param a
 * @param b
 */
export const equals = (a: [], b: []) => a.sort().join() === b.sort().join();

/**
 * 深度铺平数组
 * @param arr
 */
export const deepFlatten = (arr: any) => [].concat(...arr.map((v: any) => (Array.isArray(v) ? deepFlatten(v) : v)));
