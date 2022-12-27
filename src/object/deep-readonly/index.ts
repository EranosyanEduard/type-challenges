/**
 * @description
 * Объект, доступный только для чтения.
 * @see
 * 00009-medium-deep-readonly.ts
 */
export type DeepReadonly<Obj extends object> = {
  readonly [Prop in keyof Obj]: Obj[Prop] extends object
    ? Obj[Prop] extends Function
      ? Obj[Prop]
      : DeepReadonly<Obj[Prop]>
    : Obj[Prop]
}
