// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Arr.Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Arr.Pop<[]>, []>>
]
