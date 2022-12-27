/**
 * @description
 * Добавить элемент в начало массива.
 * @see
 * 03060-easy-unshift.ts
 */
export type Unshift<Arr extends readonly any[], Type> = [Type, ...Arr]
