/**
 * @description
 * Абсолютное значение числа.
 * @see
 * 00529-medium-absolute.ts
 */
export type Absolute<Num extends bigint | number> = `${Num}` extends `-${infer N extends number}`
  ? N
  : `${Num}` extends `${infer N extends number}`
  ? N
  : never
