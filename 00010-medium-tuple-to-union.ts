// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.To.Union<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<Arr.To.Union<[123]>, 123>>
]
