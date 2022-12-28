/**
 * @description
 * Разница между 2-я объектами.
 * @see
 * 00645-medium-diff.ts
 */
export type Diff<Obj1 extends object, Obj2 extends object> = {
  [Prop in Exclude<keyof Obj1, keyof Obj2> | Exclude<keyof Obj2, keyof Obj1>]: Prop extends keyof Obj1
    ? Obj1[Prop]
    : Obj2[Prop & keyof Obj2]
}
