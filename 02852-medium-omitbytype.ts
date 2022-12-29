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
  Expect<Equal<Obj.By.Type.OMIT<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<Obj.By.Type.OMIT<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<Obj.By.Type.OMIT<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>
]
