/**
 * @description
 * Тип-сумма из элементов массива.
 * @see
 * 00010-medium-tuple-to-union.ts
 */
export type ToUnion<Arr extends readonly any[]> = Arr[number]
