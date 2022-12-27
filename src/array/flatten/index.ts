import type { Concat } from '../concat'
import type { Push } from '../push'

/**
 * @description
 * Преобразовать массив в одномерный.
 * @see
 * 00459-medium-flatten.ts
 */
export type Flatten<Arr extends readonly any[]> = Process<Arr, []>

type Process<Arr extends readonly any[], Acc extends any[]> = Arr extends [infer Head, ...infer Tail]
  ? Head extends readonly any[]
    ? Process<Tail, Concat<Acc, Process<Head, []>>>
    : Process<Tail, Push<Acc, Head>>
  : Acc
