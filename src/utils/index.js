export const isNumber = (value) => /^[0-9]*$/g.test(value);

export const isEnglishName = (value) => /^[A-Z ]*$/g.test(value);

export const getIndexFromSameTag = (parentElement, targetElement) => {
  const targetTagName = targetElement.tagName;
  const sameTagElementList = Object.values(parentElement.children).filter(
    (element) => element.tagName === targetTagName,
  );

  return sameTagElementList.indexOf(targetElement) + 1;
};

export const setFocusSameTagByIndex = (currentElement, targetIndex) => {
  const { parentElement } = currentElement;
  const targetElement = parentElement.querySelector(
    `${currentElement.tagName}:nth-child(${targetIndex})`,
  );

  if (!targetElement) return false;

  targetElement.focus();
  return true;
};
