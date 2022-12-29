// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [Expect<Equal<Obj.Mutable<Readonly<Todo1>>, Todo1>>, Expect<Equal<Obj.Mutable<Readonly<List>>, List>>]

type errors = [
  // @ts-expect-error
  Obj.Mutable<'string'>,
  // @ts-expect-error
  Obj.Mutable<0>
]
