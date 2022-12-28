/**
 * @description
 * Выбрать из объекта поля с определенными значениями.
 * @see
 * 02595-medium-pickbytype.ts
 */
export type MyPick<Obj extends object, TypeOf extends Obj[keyof Obj]> = {
  [Prop in keyof Obj as Obj[Prop] extends TypeOf ? Prop : never]: Obj[Prop]
}
