import type { Unshift } from '../unshift'

/**
 * @description
 * Изменить порядок элементов в массиве на противоположный.
 * @see
 * 03192-medium-reverse.ts
 */
export type Reverse<Arr extends readonly any[]> = Process<Arr, []>

type Process<Arr extends readonly any[], Acc extends any[]> = Arr extends [infer Head, ...infer Tail]
  ? Process<Tail, Unshift<Acc, Head>>
  : Acc
