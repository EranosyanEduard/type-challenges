/**
 * @description
 * Добавить элемент в конец массива.
 * @see
 * 03057-easy-push.ts
 */
export type Push<Arr extends readonly any[], Type> = [...Arr, Type]
