// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';
import { ExpirationDate } from "../types/card";

interface Props {
  expirationDate : ExpirationDate,
  handleInput : (value: ExpirationDate) => void,
}
export default function ExpirationDateInput({expirationDate, handleInput} : Props) {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );

  const date = ['month', 'year']
  const datePlaceHolder = ['MM', 'YY']

  const handleUpdateInput = (index: number, value: string) => {
    handleInput({
      ...expirationDate,
      [`${date[index]}`] : value
    });
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
          handleUpdateInput(index, e.target.value);
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
      <FieldTitle title="카드 유효기간을 입력해 주세요" subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."/>
      <InputField label="유효기간" count={2} errorMessages={errorMessages}>
      {Array.from({ length: 2 }, (_, index) => (
      <Input
        key={index}
        type="string"
        maxLength={2}
        placeholder={datePlaceHolder[index]}
        isError = {checkInputError(index)}
        onChange={(e) => handleInputChange(e, date[index], index)}
      />
      ))}
      </InputField>
    </>
  )
}