// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  // @ts-expect-error
  Arr.Tail<unknown>,
  Expect<Equal<Arr.Tail<[]>, []>>,
  Expect<Equal<Arr.Tail<[1]>, []>>,
  Expect<Equal<Arr.Tail<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Arr.Tail<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
]
