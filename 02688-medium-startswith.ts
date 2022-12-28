// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<Str.StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<Str.StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<Str.StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<Str.StartsWith<'abc', ''>, true>>,
  Expect<Equal<Str.StartsWith<'abc', ' '>, false>>,
  Expect<Equal<Str.StartsWith<'', ''>, true>>
]
