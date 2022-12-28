// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Obj.Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Obj.Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Obj.Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Obj.Diff<Coo, Foo>, { age: string; gender: number }>>
]
