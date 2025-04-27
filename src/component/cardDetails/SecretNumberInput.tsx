import { CardInputProps } from '../../types/CardInputTypes';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { validateCardSecretNumber } from '../../validation/validation';
import Description from '../Description';
import Input from '../Input'; // 수정된 Input 컴포넌트 사용
import InputGroup from '../InputGroup'; // 수정된 InputGroup 컴포넌트 사용

interface SecretNumberInputProps {
  errorMessages: ErrorMessagesType;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
}

export const SecretNumberInput = ({
  errorMessages,
  setCardInput,
  handleErrorMessages,
}: SecretNumberInputProps) => {
  return (
    <>
      <Description
        headText="비밀번호를 입력해 주세요"
        detailText="앞의 2자리를 입력해주세요"
      />
      <InputGroup
        label="비밀번호 앞 2자리"
        errorMessages={errorMessages.secretNumber}
      >
        <Input
          maxLength={2}
          placeholder="비밀번호를 입력해주세요"
          validate={validateCardSecretNumber}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              secretNumber: value === '' ? null : Number(value),
            }));
          }}
          handleErrorMessage={message =>
            handleErrorMessages('secretNumber', message)
          }
          type="password"
          name="secretNumber"
        />
      </InputGroup>
    </>
  );
};
