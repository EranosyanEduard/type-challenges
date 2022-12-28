import type { Equal } from '../../_utils_'

/**
 * @description
 * Логическое значение, указывающее является ли параметр типом never.
 * @see
 * 01042-medium-isnever.ts
 */
export type IsNever<T> = Equal<T, never>
