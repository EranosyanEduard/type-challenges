/**
 * @description
 * Сделать определенные поля объекта доступными только для чтения.
 * @see
 * 00008-medium-readonly-2.ts
 */
export type MyReadonly<Obj extends object, KeyOf extends keyof Obj = keyof Obj> = {
  [Prop in keyof (Omit<Obj, KeyOf> & Readonly<Pick<Obj, KeyOf>>)]: Obj[Prop]
}
