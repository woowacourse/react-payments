export const isOverMaxLength = (target, maxLength) =>
  target.value.length > maxLength;

export const checkNextFocus = ({ target, value, maxLength, nextElement }) => {
  if (
    value[target.name].length < target.value.length &&
    target.value.length === maxLength &&
    nextElement
  ) {
    nextElement.focus();
  }
};

export const checkPrevFocus = ({ target, value, prevElement }) => {
  if (
    value[target.name].length > target.value.length &&
    target.value.length === 0 &&
    prevElement
  ) {
    prevElement.focus();
  }
};
