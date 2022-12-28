/**
 * @description
 * Сделать определенные поля объекта необязательными.
 * @see
 * 02757-medium-partialbykeys.ts
 */
export type MyPartial<Obj extends object, KeyOf extends keyof Obj = keyof Obj> = {
  [Prop in keyof (Omit<Obj, KeyOf> & Partial<Pick<Obj, KeyOf>>)]: Obj[Prop]
}
