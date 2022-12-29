// ============= Test Cases =============
import type { Num } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Num.Decrement<1>, 0>>,
  Expect<Equal<Num.Decrement<55>, 54>>,
  Expect<Equal<Num.Decrement<3>, 2>>,
  Expect<Equal<Num.Decrement<100>, 99>>,
  Expect<Equal<Num.Decrement<1101>, 1100>>,
  Expect<Equal<Num.Decrement<0>, -1>>
]
