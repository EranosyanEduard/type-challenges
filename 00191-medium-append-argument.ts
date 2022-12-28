// ============= Test Cases =============
import type { Fun } from './src'
import type { Equal, Expect } from './test-utils'

type Case1 = Fun.Param.Append<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = Fun.Param.Append<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  Fun.Param.Append<unknown, undefined>
]
