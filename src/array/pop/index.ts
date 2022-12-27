/**
 * @description
 * Удалить последний элемент из массива.
 * @see
 * 00016-medium-pop.ts
 */
export type Pop<Arr extends readonly any[]> = Arr extends [...infer Types, any] ? Types : []
