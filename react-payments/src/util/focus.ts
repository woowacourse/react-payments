interface FocusNextParams {
  target: HTMLInputElement;
  value: {
    [key: string]: string;
  };
  maxLength: number;
  nextElement: HTMLInputElement | null;
}

interface FocusPrevParams {
  target: HTMLInputElement;
  key: string;
  prevElement: HTMLInputElement | null;
}

export const focusNextElement = ({
  target,
  value,
  maxLength,
  nextElement,
}: FocusNextParams) => {
  if (
    isNextFocus({ target, value, maxLength, nextElement }) &&
    nextElement !== null
  ) {
    nextElement.focus();
  }
};

export const focusPrevElement = ({
  target,
  key,
  prevElement,
}: FocusPrevParams) => {
  if (isPrevFocus({ target, key, prevElement }) && prevElement !== null) {
    prevElement.focus();
  }
};

const isNextFocus = ({
  target,
  value,
  maxLength,
  nextElement,
}: FocusNextParams) => {
  return (
    value[target.name].length < target.value.length &&
    target.value.length === maxLength &&
    !!nextElement
  );
};

const isPrevFocus = ({ target, key, prevElement }: FocusPrevParams) => {
  return key === "Backspace" && target.value.length === 0 && !!prevElement;
};
