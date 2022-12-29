import type { Reverse } from '../../../array'

/**
 * @description
 * Изменить порядок параметров функции на противоположный.
 * @see
 * 03196-medium-flip-arguments.ts
 */
export type FlipParam<Fun extends Function> = Fun extends (...args: infer Args) => infer Return
  ? (...args: Reverse<Args>) => Return
  : never
