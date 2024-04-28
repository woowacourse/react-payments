import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { CVC } from '../../types/card';
import { ShowComponents } from '../../types/showComponents';

interface Props {
  CVC: CVC;
  handleInput: Dispatch<SetStateAction<CVC>>;
  handleShowComponent: Dispatch<SetStateAction<ShowComponents>>;
}
export default function CVCInput({
  CVC,
  handleInput,
  handleShowComponent,
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);

  const errorMessages = Object.values(CVC).map((value) => value.errorMessage);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(CVC).reduce((pre, cur) => {
        if (!cur.isError && cur.value !== '' && cur.value.length === 3) {
          return pre + 1;
        }
        return pre;
      }, 0);
      return isNotAllError === 1;
    };
    if (checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        passwordInput: true,
      }));
    }
  }, [CVC, handleShowComponent]);

  const handleUpdateInput = (value: string) => {
    const cardKey = 'CVC' as keyof CVC;
    handleInput((prevState: CVC) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          value: value,
        },
      };
    });
  };

  const handleUpdateErrorMessages = (
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = 'CVC' as keyof CVC;
    handleInput((prevState: CVC) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          errorMessage: errorMessage,
          isError: isError,
        },
      };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdateErrorMessages('', false);
      handleUpdateInput(e.target.value);
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateErrorMessages(error.message, true);
      }
    }
  };

  const checkInputError = () => {
    const cardKey = 'CVC' as keyof CVC;
    return CVC[cardKey].isError;
  };

  return (
    <>
      <FieldTitle title='CVC 번호를 입력해 주세요' />
      <InputField
        label='CVC'
        count={1}
        errorMessages={errorMessages}
      >
        {Array.from({ length: 1 }).map((_, index) => (
          <Input
            key={index}
            type='string'
            maxLength={3}
            value={CVC[`CVC` as keyof CVC].value}
            placeholder={'123'}
            isError={checkInputError()}
            onChange={(e) => handleInputChange(e, 'CVC')}
            inputRef={(element: HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
