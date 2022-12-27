// ============= Test Cases =============
import type { Arr } from './src'
import type { Equal, Expect } from './test-utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Arr.Length<typeof tesla>, 4>>,
  Expect<Equal<Arr.Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Arr.Length<5>,
  // @ts-expect-error
  Arr.Length<'hello world'>
]
