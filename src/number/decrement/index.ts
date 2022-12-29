import type { Length, New, Tail } from '../../array'

/**
 * @description
 * Декремент.
 * @see
 * 02257-medium-minusone.ts
 */
export type Decrement<Num extends number> = `${Num}` extends `-${string}` | '0' ? -1 : Length<Tail<New<Num>>>
