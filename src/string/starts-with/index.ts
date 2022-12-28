/**
 * @description
 * Логическое значение, указывающее начинается ли строка с подстроки.
 * @see
 * 02688-medium-startswith.ts
 */
export type StartsWith<Str extends string, Substr extends string> = Str extends `${Substr}${string}` ? true : false
