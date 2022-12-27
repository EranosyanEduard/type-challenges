// ============= Test Cases =============
import type { Obj } from './src'
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<Obj.By.Key.READONLY<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<Obj.By.Key.READONLY<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<Obj.By.Key.READONLY<Todo2, 'title' | 'description'>, Expected>>
]

// @ts-expect-error
type error = Obj.By.Key.READONLY<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
