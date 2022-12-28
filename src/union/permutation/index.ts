import type { Concat } from '../../array'
import type { Never } from '../../is'

/**
 * @description
 * Тип-сумма из кортежей, содержащих комбинации значений, представленных параметром.
 * @see
 * 00296-medium-permutation.ts
 */
export type Permutation<Union extends boolean | number | string> = Process<`${Union}`>

type Process<Union extends string> = Never<Union> extends true
  ? []
  : {
      [Prop in Union]: Concat<
        [Prop extends 'false' ? false : Prop extends 'true' ? true : Prop],
        Permutation<Exclude<Union, Prop>>
      >
    }[Union]
