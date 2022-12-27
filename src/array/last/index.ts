/**
 * @description
 * Последний элемент массива.
 * @see
 * 00015-medium-last.ts
 */
export type Last<Arr extends readonly any[]> = Arr extends [...any[], infer Type] ? Type : never
