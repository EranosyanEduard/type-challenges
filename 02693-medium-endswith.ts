// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<Str.EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<Str.EndsWith<'abc', 'd'>, false>>
]
