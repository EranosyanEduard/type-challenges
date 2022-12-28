// ============= Test Cases =============
import type { Is } from './src'
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Is.Never<never>, true>>,
  Expect<Equal<Is.Never<never | string>, false>>,
  Expect<Equal<Is.Never<''>, false>>,
  Expect<Equal<Is.Never<undefined>, false>>,
  Expect<Equal<Is.Never<null>, false>>,
  Expect<Equal<Is.Never<[]>, false>>,
  Expect<Equal<Is.Never<{}>, false>>
]
