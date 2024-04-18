import { useState } from "react";
import React from "react";

interface Props {
  initialValue: string[];
  validate?: (input: string[]) => string;
}

//TODO: validate : 에러가 없는 경우에는 빈 문자열 반환,
//에러 있으면 에러 메세지 반환

//isFocus => true일 때 검사x
//isFocus => false일때 검사해야됨

const useInput = ({ initialValue = [], validate }: Props) => {
  const [input, setInput] = useState<string[]>(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newValue = event.target.value;
    setInput((prev) => {
      const newInput = [...prev];
      newInput[index] = newValue;

      // 새 입력값으로 상태를 업데이트한 직후 검증 로직을 호출
      if (validate) {
        const validationError = validate(newInput);
        if (validationError) {
          setErrorMessage(validationError);
        } else {
          setErrorMessage("");
        }
      }

      return newInput;
    });
    // const inputValue = event.target.value;

    // console.log("aaa");

    // const isError = errorMessage !== "";
    // if (isError) return [];

    // if (validate) {
    //   // console.log("aa");
    //   setErrorMessage(validate(input));
    // }

    // setInput((prev) => {
    //   const copy = [...prev];
    //   copy[index] = inputValue;
    //   return copy;
    // });
  };

  // const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
  //   console.log(event.target);
  //   const InputElement = event.target as HTMLInputElement & {
  //     $isError: boolean;
  //   };
  //   InputElement.$isError = true;
  //   if (validate) {
  //     console.log(event.target);
  //     setErrorMessage(validate(input));
  //   }
  // };

  return { input, onChange, errorMessage };
};
export default useInput;
