// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Obj.Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]
