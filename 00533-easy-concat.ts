// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.Concat<[], []>, []>>,
  Expect<Equal<Arr.Concat<[], [1]>, [1]>>,
  Expect<Equal<Arr.Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Arr.Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>
]
