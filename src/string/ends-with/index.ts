/**
 * @description
 * Логическое значение, указывающее заканчивается ли строка подстрокой.
 * @see
 * 02693-medium-endswith.ts
 */
export type EndsWith<Str extends string, Substr extends string> = Str extends `${string}${Substr}` ? true : false
