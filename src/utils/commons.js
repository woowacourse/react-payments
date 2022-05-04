export const isNumeric = (value) => !Number.isNaN(Number(value));
export const isBackspace = (event) => event.keyCode === 8;
export const hasProperty = (object, key) =>
  Object.prototype.hasOwnProperty.call(object, key);
export function* generateIndex(initialIndex) {
  let index = initialIndex;

  while (true) yield (index += 1);
}
