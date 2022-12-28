/**
 * @description
 * Сравнение 2-х типов.
 */
export type Equal<T, U> = (<R>() => R extends T ? Result['Success'] : Result['Failure']) extends <R>() => R extends U
  ? Result['Success']
  : Result['Failure']
  ? Result['Success']
  : Result['Failure']

interface Result {
  Failure: false
  Success: true
}
