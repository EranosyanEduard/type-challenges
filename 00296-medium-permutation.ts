// ============= Test Cases =============
import type { Union } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Union.Permutation<'A'>, ['A']>>,
  Expect<
    Equal<
      Union.Permutation<'A' | 'B' | 'C'>,
      ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
    >
  >,
  Expect<
    Equal<
      Union.Permutation<'B' | 'A' | 'C'>,
      ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
    >
  >,
  Expect<Equal<Union.Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Union.Permutation<never>, []>>
]
