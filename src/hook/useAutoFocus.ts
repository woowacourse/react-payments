import { FormEvent, useRef } from "react";
import { INPUT_LENGTH_LIMIT } from "../constant/etc";

export const useAutoFocus = () => {
  const originElementValues = useRef<string[]>([]);

  return (e: FormEvent<HTMLFormElement>) => {
    const changedElement = new Array(e.currentTarget.elements.length).fill(0);
    for (let i = 0; i < e.currentTarget.elements.length; i++) {
      changedElement[i] = e.currentTarget.elements[i];
    }
    const changedElementValues = changedElement.map((elem) => elem.value);

    if (originElementValues.current.length === 0) {
      originElementValues.current = changedElementValues;
      return;
    }
    changedElementValues.forEach((value, index) => {
      if (value === originElementValues.current[index]) return;

      switch (index) {
        case 0:
        case 1:
        case 2:
        case 3:
          value.length >= INPUT_LENGTH_LIMIT.MAX_EACH_CARD_NUMBER &&
            changedElement[index + 1].select();
          break;
        case 4:
          value.length >= INPUT_LENGTH_LIMIT.MAX_EXPIRATION_DATE &&
            changedElement[index + 1].select();
          break;
        case 6:
          value.length >= INPUT_LENGTH_LIMIT.MAX_SECURITY_CODE &&
            changedElement[index + 2].select();
          break;
        case 8:
          value.length >= INPUT_LENGTH_LIMIT.MAX_EACH_PASSWORD &&
            changedElement[index + 1].select();
          break;
        case 9:
          value.length >= INPUT_LENGTH_LIMIT.MAX_EACH_PASSWORD &&
            changedElement[index + 3].focus();
          break;
        default:
          break;
      }
    });
    originElementValues.current = changedElementValues;
  };
};
