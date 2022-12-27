// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Arr.Head<[3, 2, 1]>, 3>>,
  Expect<Equal<Arr.Head<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<Arr.Head<[]>, never>>,
  Expect<Equal<Arr.Head<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  Arr.Head<'notArray'>,
  // @ts-expect-error
  Arr.Head<{ 0: 'arrayLike' }>
]
