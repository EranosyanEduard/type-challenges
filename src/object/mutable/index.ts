/**
 * @description
 * Сделать объект доступным для записи.
 * @see
 * 02793-medium-mutable.ts
 */
export type Mutable<Obj extends object> = {
  -readonly [Prop in keyof Obj]: Obj[Prop]
}
