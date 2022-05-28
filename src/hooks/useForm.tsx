import React, { useEffect, useRef, useState } from "react";
import { cardInfoValidationError } from "utils/cardInfoValidationError";

type Props = {
  formRef: React.MutableRefObject<HTMLFormElement>;
  isComplete: boolean;
  onSubmit: (formData: Object) => void;
  setFormValidity: (formInputArray: HTMLFormElement[]) => void;
};

const useForm = ({ formRef, isComplete, onSubmit, setFormValidity }: Props) => {
  const isInitMount = useRef(true);

  const [formInputArray, setFormInputArray] = useState<HTMLFormElement[]>([]);

  useEffect(() => {
    if (isInitMount.current) isInitMount.current = false;
    else setFormValidity(formInputArray);
  }, [isComplete]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setFormInputArray([...formRef.current] as HTMLFormElement[]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const focusFormInput = (currInput: HTMLFormElement, direction: number) => {
    const currentIndex = formInputArray.indexOf(currInput);

    const focusTarget = formInputArray[currentIndex + direction];

    if (!focusTarget || focusTarget.parentNode !== currInput.parentNode) return;

    focusTarget.focus();
  };

  const handlePrevFocus: React.KeyboardEventHandler<HTMLFormElement> = ({
    target,
    key,
  }) => {
    const targetInput = target as HTMLFormElement;
    const { value } = targetInput;

    if (key !== "Backspace" || value !== "") return;

    focusFormInput(targetInput, -1);
  };

  const handleNextFocus: React.ChangeEventHandler<HTMLFormElement> = ({
    target,
  }) => {
    const { maxLength, value } = target;

    if (value.length !== maxLength) return;

    focusFormInput(target, 1);
  };

  const handleFormValidation: React.ChangeEventHandler<HTMLFormElement> = ({
    target,
  }) => {
    if (target.validity.patternMismatch) {
      const message = cardInfoValidationError[target.name];
      target.setCustomValidity(message);
    } else {
      target.setCustomValidity("");
    }

    target.reportValidity();
  };

  const handleFormChange: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    handleNextFocus(e);
    handleFormValidation(e);
  };

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );

    onSubmit(formData);
  };

  return { handleFormChange, handlePrevFocus, handleFormSubmit };
};

export default useForm;
