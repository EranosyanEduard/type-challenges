/**
 * @description
 * Объединение 2-х объектов.
 * @see
 * 00599-medium-merge.ts
 */
export type Merge<Obj1 extends object, Obj2 extends object> = {
  [Prop in keyof Obj1 | keyof Obj2]: Prop extends keyof Obj2 ? Obj2[Prop] : Obj1[Prop & keyof Obj1]
}
