import type { Length as ArrLen, Push } from '../../array'

/**
 * @description
 * Длина строки.
 * @see
 * 00298-medium-length-of-string.ts
 */
export type Length<Str extends string> = Process<Str, []>

type Process<Str extends string, Acc extends any[]> = Str extends `${string}${infer Tail}`
  ? Process<Tail, Push<Acc, any>>
  : ArrLen<Acc>
