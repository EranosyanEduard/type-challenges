/**
 * @description
 * Сделать определенные поля объекта обязательными.
 * @see
 * 02759-medium-requiredbykeys.ts
 */
export type MyRequired<Obj extends object, KeyOf extends keyof Obj = keyof Obj> = {
  [Prop in keyof (Omit<Obj, KeyOf> & Required<Pick<Obj, KeyOf>>)]: Prop extends KeyOf
    ? Exclude<Obj[Prop], undefined>
    : Obj[Prop]
}
