import type { TrimLeft } from '../left'
import type { TrimRight } from '../right'

/**
 * @description
 * Удалить пробельные символы в начале и конце строки.
 * @see
 * 00108-medium-trim.ts
 */
export type Trim<Str extends string> = TrimLeft<TrimRight<Str>>
