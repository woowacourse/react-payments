// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';

interface Props {
  handleInput : (value: string) => void,
}
export default function UserNameInput({handleInput} : Props) {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );

  const handleUpdateInput = (userName: string) => {
    handleInput(userName);
  };

  const handleUpdateErrorMessages = (index: number, errorMessage: string) => {
    setErrorMessages((prev) => {
      return {
        ...prev,
        [index]: errorMessage,
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, info: string, index : number) => {
    try {
          Validation[info]?.(e.target.value);
          handleUpdateErrorMessages(index, '');
          handleUpdateInput(e.target.value);
        } catch (error) {
            if (error instanceof Error) {
            handleUpdateErrorMessages(index, error.message);
          }
        }
  };

  const checkInputError = (index : number) => {
    if(index in errorMessages){
      return errorMessages[index] !== '';
    }
    return false;
  }

  return (
    <> 
      <FieldTitle title="카드 소유자 이름을 입력해 주세요"/>
      <InputField label="소유자 이름" count={1} errorMessages={errorMessages}>
      {Array.from({ length: 1 }, (_, index) => (
      <Input
        key={index}
        type="string"
        maxLength={30}
        placeholder={'JOHN DOE'}
        isError = {checkInputError(index)}
        onChange={(e) => handleInputChange(e, 'userName', index)}
      />
      ))}
      </InputField>
    </>
  )
}