// ============= Test Cases =============
import type { Num } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Num.Absolute<0>, 0>>,
  Expect<Equal<Num.Absolute<-0>, 0>>,
  Expect<Equal<Num.Absolute<10>, 10>>,
  Expect<Equal<Num.Absolute<-5>, 5>>,
  Expect<Equal<Num.Absolute<-1_000_000n>, 1000000>>,
  Expect<Equal<Num.Absolute<9_999n>, 9999>>
]
