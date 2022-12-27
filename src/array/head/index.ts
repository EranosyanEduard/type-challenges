/**
 * @description
 * Первый элемент массива.
 * @see
 * 00014-easy-first.ts
 */
export type Head<Arr extends readonly any[]> = Arr extends [infer Head, ...any[]] ? Head : never
