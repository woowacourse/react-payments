// import styled from "styled-components";
import Input from "./Input";
import FieldTitle from "./FieldTitle";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Validation from "../domain/InputValidation";
import InputField from './InputField';
import { UserName } from "../types/card";
import { ShowComponents } from "../types/showCompents";

interface Props {
  userName : UserName
  handleInput : Dispatch<SetStateAction<UserName>>,
  handleShowComponent : Dispatch<SetStateAction<ShowComponents>>,
}
export default function UserNameInput({userName, handleInput, handleShowComponent} : Props) {
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>(
    {}
  );

  useEffect(() => {
    const messages = Object.values(userName).map(value => value.errorMessage);
    setErrorMessages(messages);
  }, [userName]);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(userName).reduce((pre, cur) => {
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
        userNameInput: true,
      }));
    }
  }, [userName, handleShowComponent]); 

  const handleUpdateInput = (index: number, value: string) => {

    const cardKey = 'userName' as keyof UserName;
    handleInput((prevState : UserName) => {
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
    const cardKey = 'userName' as keyof UserName;
    handleInput((prevState : UserName) => {
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

  const checkInputError = (index : number) => {
    const cardKey = 'userName' as keyof UserName;
    return userName[cardKey].isError;
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
        onChange={(e) => handleInputChange(e, 'userName', index, 30)}
      />
      ))}
      </InputField>
    </>
  )
}