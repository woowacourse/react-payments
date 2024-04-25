import { ERRORS } from "@/constants/messages";
import { ChangeEvent, useState, KeyboardEvent } from "react";

const useCVC = () => {
  const [CVC, setCVC] = useState({
    value: "",
    isError: false,
    errorMessage: "",
    isDone: false,
  });
  const [CVCShowNextInput, setCVCShowNextInput] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const focusCVC = () => {
    setIsFocus(true);
  };

  const blurCVC = () => {
    setIsFocus(false);
  };

  const CVCHandleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (CVC.value.length === 3) {
        setCVCShowNextInput(true);
      } else {
        setCVC({
          ...CVC,
          isError: true,
          errorMessage: "세 자리 숫자를 입력해주세요",
        });
      }
    }
  };

  const changeCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (Number.isInteger(Number(value))) {
      setCVC({
        ...CVC,
        value,
        isError: false,
        errorMessage: "",
        isDone: value.length === 3,
      });
      return;
    }
    setCVC({
      ...CVC,
      isError: true,
      errorMessage: ERRORS.isNotInteger,
    });
  };

  return {
    CVC,
    CVCShowNextInput,
    CVCHandleKeyDown,
    changeCVC,
    isFocus,
    focusCVC,
    blurCVC,
  };
};

export default useCVC;
