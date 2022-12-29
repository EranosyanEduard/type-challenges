/**
 * @description
 * Исключить из объекта поля с определенными значениями.
 * @see
 * 02852-medium-omitbytype.ts
 */
export type MyOmit<Obj extends object, TypeOf extends Obj[keyof Obj]> = {
  [Prop in keyof Obj as Obj[Prop] extends TypeOf ? never : Prop]: Obj[Prop]
}
