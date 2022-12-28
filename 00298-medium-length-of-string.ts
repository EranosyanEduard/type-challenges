// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.Length<''>, 0>>,
  Expect<Equal<Str.Length<'kumiko'>, 6>>,
  Expect<Equal<Str.Length<'reina'>, 5>>,
  Expect<Equal<Str.Length<'Sound! Euphonium'>, 16>>
]
