import type { SpaceCharUnion } from '../_utils_'

/**
 * @description
 * Удалить пробельные символы в начале строки.
 * @see
 * 00106-medium-trimleft.ts
 */
export type TrimLeft<Str extends string> = Str extends `${SpaceCharUnion}${infer Tail}` ? TrimLeft<Tail> : Str
