// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.Push<[], 1>, [1]>>,
  Expect<Equal<Arr.Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Arr.Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
]
