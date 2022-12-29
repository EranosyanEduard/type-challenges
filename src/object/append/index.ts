/**
 * @description
 * Добавить поле в объект.
 * @see
 * 00527-medium-append-to-object.ts
 */
export type Append<Obj extends object, Key extends number | string | symbol, Val> = {
  [Prop in keyof Obj | Key]: Prop extends keyof Obj ? Obj[Prop] : Val
}
