// ============= Test Cases =============
import type { Fun } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fun.Param.Flip<() => boolean>, () => boolean>>,
  Expect<Equal<Fun.Param.Flip<(foo: string) => number>, (foo: string) => number>>,
  Expect<
    Equal<
      Fun.Param.Flip<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
]

type errors = [
  // @ts-expect-error
  Fun.Param.Flip<'string'>,
  // @ts-expect-error
  Fun.Param.Flip<{ key: 'value' }>,
  // @ts-expect-error
  Fun.Param.Flip<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  Fun.Param.Flip<null | undefined>
]
