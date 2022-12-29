// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.Trim.LeftAndRight<'str'>, 'str'>>,
  Expect<Equal<Str.Trim.LeftAndRight<' str'>, 'str'>>,
  Expect<Equal<Str.Trim.LeftAndRight<'     str'>, 'str'>>,
  Expect<Equal<Str.Trim.LeftAndRight<'str   '>, 'str'>>,
  Expect<Equal<Str.Trim.LeftAndRight<'     str     '>, 'str'>>,
  Expect<Equal<Str.Trim.LeftAndRight<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Str.Trim.LeftAndRight<''>, ''>>,
  Expect<Equal<Str.Trim.LeftAndRight<' \n\t '>, ''>>
]
