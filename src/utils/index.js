export const isNumber = (value) => /^[0-9]*$/g.test(value);

export const isEnglishName = (value) => /^[A-Z ]*$/g.test(value);

export const getElementIndex = (parentElement, childElement) =>
  [...parentElement.children].indexOf(childElement) + 1;

export const setFocusNextElement = (currentElement) => {
  const { parentElement } = currentElement;

  const currentIndex = getElementIndex(parentElement, currentElement);
  const nextElement = parentElement.querySelector(
    `${currentElement.tagName}:nth-child(${currentIndex + 1})`,
  );

  if (!nextElement) return false;

  nextElement.focus();
  return true;
};
