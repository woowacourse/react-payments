export const focusNextElement = ({ target, value, maxLength, nextElement }) => {
  if (isNextFocus({ target, value, maxLength, nextElement })) {
    nextElement.focus();
  }
};

export const focusPrevElement = ({ target, key, prevElement }) => {
  if (isPrevFocus({ target, key, prevElement })) {
    prevElement.focus();
  }
};

const isNextFocus = ({ target, value, maxLength, nextElement }) => {
  return (
    value[target.name].length < target.value.length &&
    target.value.length === maxLength &&
    nextElement
  );
};

const isPrevFocus = ({ target, key, prevElement }) => {
  return key === "Backspace" && target.value.length === 0 && prevElement;
};
