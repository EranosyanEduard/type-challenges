// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [Expect<Equal<Arr.Last<[3, 2, 1]>, 1>>, Expect<Equal<Arr.Last<[() => 123, { a: string }]>, { a: string }>>]
