// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';
import { CardNumbers } from "../types/card";

interface Props {
  cardNumber : CardNumbers,
  handleInput : (cardNumbers: CardNumbers) => void,
}
export default function CardNumberInput({cardNumber, handleInput} : Props) {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );

  const handleUpdateInput = (index: number, value: string) => {
    handleInput({
      ...cardNumber,
      [`cardNumber${index+1}`] : value
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
      <FieldTitle title="결제할 카드 번호를 입력해 주세요" subtitle="본인 명의의 카드만 결제 가능합니다."/>
      <InputField label="카드 번호" count={4} errorMessages={errorMessages}>
      {Array.from({ length: 4 }, (_, index) => (
      <Input
        key={index}
        type="string"
        maxLength={4}
        placeholder="1234"
        isError = {checkInputError(index)}
        onChange={(e) => handleInputChange(e, 'cardNumber', index)}
      />
      ))}
      </InputField>
    </>
  )
}