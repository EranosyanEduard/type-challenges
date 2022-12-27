// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.Reverse<[]>, []>>,
  Expect<Equal<Arr.Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Arr.Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]

type errors = [
  // @ts-expect-error
  Arr.Reverse<'string'>,
  // @ts-expect-error
  Arr.Reverse<{ key: 'value' }>
]
