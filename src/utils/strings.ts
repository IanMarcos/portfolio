export const isStringInStringEnum = (value: string, enumeration: any) =>
  Object.values(enumeration).includes(value);
