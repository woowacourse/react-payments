interface FocusParams {
  target: HTMLInputElement;
  element: HTMLInputElement;
}

interface PrevFocusParams extends FocusParams {
  key: string;
}

interface NextFocusParams extends FocusParams {
  maxLength: number;
  value: {
    [key: string]: string;
  };
}

export const focusNextElement = ({
  target,
  value,
  maxLength,
  element,
}: NextFocusParams) => {
  if (isNextFocus({ target, value, maxLength, element })) {
    element.focus();
  }
};

export const focusPrevElement = ({ target, key, element }: PrevFocusParams) => {
  if (isPrevFocus({ target, key, element })) {
    element.focus();
  }
};

const isNextFocus = ({
  target,
  value,
  maxLength,
  element,
}: NextFocusParams) => {
  return (
    value[target.name].length < target.value.length &&
    target.value.length === maxLength &&
    element
  );
};

const isPrevFocus = ({ target, key, element }: PrevFocusParams) => {
  return key === "Backspace" && target.value.length === 0 && element;
};
