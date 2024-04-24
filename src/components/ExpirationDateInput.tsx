// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';
import { ExpirationDate } from "../types/card";
import { ShowComponents } from "../types/showCompents";

interface Props {
  expirationDate : ExpirationDate,
  handleInput : Dispatch<SetStateAction<ExpirationDate>>
  handleShowComponent : Dispatch<SetStateAction<ShowComponents>>
}
export default function ExpirationDateInput({expirationDate, handleInput, handleShowComponent} : Props) {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  useEffect(() => {
    const messages = Object.values(expirationDate).map(value => value.errorMessage);
    setErrorMessages(messages);
  }, [expirationDate]);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(expirationDate).reduce((pre, cur) => {
        if(!cur.isError && cur.value !== '' && cur.value.length === 2){
          return pre + 1;
        }
        return pre;
      }, 0)
      return isNotAllError === 2
    }
    if(checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        userNameInput: true,
      }));
    }
  }, [expirationDate, handleShowComponent]); 

  const date = ['month', 'year']
  const datePlaceHolder = ['MM', 'YY']


  const handleUpdateInput = (index: number, value: string) => {

    const cardKey = date[index] as keyof ExpirationDate;
    handleInput((prevState : ExpirationDate) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          value : value
        },
      };
    });
  };

  const handleUpdateErrorMessages = (index: number, errorMessage: string, isError: boolean) => {
    const cardKey = date[index] as keyof ExpirationDate;
    handleInput((prevState : ExpirationDate) => {
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
    const cardKey = date[index] as keyof ExpirationDate;
    return expirationDate[cardKey].isError;
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
        onChange={(e) => handleInputChange(e, date[index], index, 2)}
      />
      ))}
      </InputField>
    </>
  )
}