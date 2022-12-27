/**
 * @description
 * Удалить первый элемент из массива.
 * @see
 * 03062-medium-shift.ts
 */
export type Tail<Arr extends readonly any[]> = Arr extends [any, ...infer Tail] ? Tail : []
