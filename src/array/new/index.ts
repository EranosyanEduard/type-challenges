import type { Length } from '../length'
import type { Push } from '../push'

/**
 * @description
 * Конструктор кортежа определенной длины.
 * @see
 * 07544-medium-construct-tuple.ts
 */
export type New<Len extends number, Type = unknown> = Process<Len, Type, []>

type Process<Len extends number, Type, Acc extends Type[]> = Len extends Length<Acc>
  ? Acc
  : Process<Len, Type, Push<Acc, Type>>
