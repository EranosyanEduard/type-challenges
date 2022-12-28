import type { Push } from '../../../array'

/**
 * @description
 * Добавить параметр функции.
 * @see
 * 00191-medium-append-argument.ts
 */
export type AppendParam<Fun extends Function, Type> = Fun extends (...args: infer Args) => infer Return
  ? (...args: Push<Args, Type>) => Return
  : never
