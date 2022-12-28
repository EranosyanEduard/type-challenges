// ============= Test Cases =============
import type { Str } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Str.To.Union<''>, never>>,
  Expect<Equal<Str.To.Union<'t'>, 't'>>,
  Expect<Equal<Str.To.Union<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<Str.To.Union<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>
]
