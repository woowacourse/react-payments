// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';
import { CardNumbers } from "../types/card";
import { ShowComponents } from "../types/showCompents";

interface Props {
  cardNumbers : CardNumbers,
  handleInput : Dispatch<SetStateAction<CardNumbers>>
  handleShowComponent : Dispatch<SetStateAction<ShowComponents>>
}
export default function CardNumberInput({cardNumbers, handleInput, handleShowComponent} : Props) {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    const messages = Object.values(cardNumbers).map(value => value.errorMessage);
    setErrorMessages(messages);
  }, [cardNumbers]);
  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(cardNumbers).reduce((pre, cur) => {
        if(!cur.isError && cur.value !== '' && cur.value.length === 4){
          return pre + 1;
        }
        return pre;
      }, 0)
      return isNotAllError === 4
    }
    if(checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        expirationDateInput: true,
      }));
    }
  }, [cardNumbers, handleShowComponent]); 

  const handleUpdateInput = (index: number, value: string) => {

    const cardKey = `cardNumber${index + 1}` as keyof CardNumbers;
    handleInput((prevState : CardNumbers) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState.cardNumber1,
          value : value
        },
      };
    });
  };

  const handleUpdateErrorMessages = (index: number, errorMessage: string, isError: boolean) => {
    const cardKey = `cardNumber${index + 1}` as keyof CardNumbers;
    handleInput((prevState : CardNumbers) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          errorMessage: errorMessage,
          isError: isError 
        },
      };
    });
  };

    
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, info: string, index : number, maxLength: number) => {
    try {
          Validation[info]?.(e.target.value, maxLength);
          handleUpdateErrorMessages(index, '', false);
          handleUpdateInput(index, e.target.value);
        } catch (error) {
            if (error instanceof Error) {
            handleUpdateErrorMessages(index, error.message, true);
          }
        }
  };

  // const showErrorMessage = () => {
  //   console.log(cardNumbers)
  //   Object.values(cardNumbers).find(value => {
  //     if(value.isError){
  //       return value.errorMessage;
  //     }
  //   })
  //   return ''
  // }


  const checkInputError = (index : number) => {
    const cardKey = `cardNumber${index + 1}` as keyof CardNumbers;
    return cardNumbers[cardKey].isError;
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
        onChange={(e) => handleInputChange(e, 'cardNumber', index, 4)}
      />
      ))}
      </InputField>
    </>
  )
}