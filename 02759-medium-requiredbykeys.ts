// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<Obj.By.Key.REQUIRED<User, 'name'>, UserRequiredName>>,
  Expect<Equal<Obj.By.Key.REQUIRED<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<Obj.By.Key.REQUIRED<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<Obj.By.Key.REQUIRED<User, 'name' | 'unknown'>, UserRequiredName>>
]
