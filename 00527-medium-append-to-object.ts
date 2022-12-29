// ============= Test Cases =============
import type { Obj } from './src'
import type { Equal, Expect } from './test-utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type cases = [
  Expect<Equal<Obj.Append<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<Obj.Append<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<Obj.Append<test3, 'isMotherRussia', false | undefined>, testExpect3>>
]
