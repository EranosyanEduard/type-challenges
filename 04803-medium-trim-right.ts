// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.Trim.Right<'str'>, 'str'>>,
  Expect<Equal<Str.Trim.Right<'str '>, 'str'>>,
  Expect<Equal<Str.Trim.Right<'str     '>, 'str'>>,
  Expect<Equal<Str.Trim.Right<'     str     '>, '     str'>>,
  Expect<Equal<Str.Trim.Right<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<Str.Trim.Right<''>, ''>>,
  Expect<Equal<Str.Trim.Right<'\n\t '>, ''>>
]
