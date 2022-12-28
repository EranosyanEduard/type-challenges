// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<Obj.By.Key.PARTIAL<User, 'name'>, UserPartialName>>,
  Expect<Equal<Obj.By.Key.PARTIAL<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<Obj.By.Key.PARTIAL<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<Obj.By.Key.PARTIAL<User, 'name' | 'unknown'>, UserPartialName>>
]
