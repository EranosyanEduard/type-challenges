/**
 * @description
 * Конкатенация 2-х массивов.
 * @see
 * 00533-easy-concat.ts
 */
export type Concat<Arr1 extends readonly any[], Arr2 extends readonly any[]> = [...Arr1, ...Arr2]
