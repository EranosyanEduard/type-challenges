// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.Trim.Left<'str'>, 'str'>>,
  Expect<Equal<Str.Trim.Left<' str'>, 'str'>>,
  Expect<Equal<Str.Trim.Left<'     str'>, 'str'>>,
  Expect<Equal<Str.Trim.Left<'     str     '>, 'str     '>>,
  Expect<Equal<Str.Trim.Left<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<Str.Trim.Left<''>, ''>>,
  Expect<Equal<Str.Trim.Left<' \n\t'>, ''>>
]
