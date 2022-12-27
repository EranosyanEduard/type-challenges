// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.New<0>, []>>,
  Expect<Equal<Arr.New<2>, [unknown, unknown]>>,
  Expect<Equal<Arr.New<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<Arr.New<1000>['length'], 1000>>
]
