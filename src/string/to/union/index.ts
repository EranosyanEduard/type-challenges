/**
 * @description
 * Тип-сумма из символов строки.
 * @see
 * 00531-medium-string-to-union.ts
 */
export type ToUnion<Str extends string> = Process<Str, never>

type Process<Str extends string, Acc extends string> = Str extends `${infer Head}${infer Tail}`
  ? Process<Tail, Acc | Head>
  : Acc
