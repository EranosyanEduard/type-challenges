import type { SpaceCharUnion } from '../_utils_'

/**
 * @description
 * Удалить пробельные символы в конце строки.
 * @see
 * 04803-medium-trim-right.ts
 */
export type TrimRight<Str extends string> = Str extends `${infer Substr}${SpaceCharUnion}` ? TrimRight<Substr> : Str
