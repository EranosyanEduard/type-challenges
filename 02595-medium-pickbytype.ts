// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<Obj.By.Type.PICK<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<Obj.By.Type.PICK<Model, string>, { name: string }>>,
  Expect<Equal<Obj.By.Type.PICK<Model, number>, { count: number }>>
]
