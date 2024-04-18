import styled from 'styled-components';
import { InputInfo } from '../types/input';
import Validation from '../domain/InputValidation';
import { Card } from '../types/card';

function updateErrorMessages(
  prev: { [key: number]: string },
  index: number,
  message: string
): { [key: number]: string } {
  return {
    ...prev,
    [index]: message,
  };
}

const InputContainer = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.color};
  outline-color: ${(props) => props.color};
  border-radius: 3px;
`;

interface Props {
  info: InputInfo;
  index: number;
  cardInfo: Card;
  handleInput: (value: Card) => void;
  errorMessages: { [key: number]: string };
  setErrorMessages: (value: { [key: number]: string }) => void;
}

export default function Input({
  info,
  index,
  cardInfo,
  handleInput,
  errorMessages,
  setErrorMessages,
}: Props) {
  return (
    <InputContainer
      color={errorMessages[index] ? 'red' : 'grey'}
      type="text"
      maxLength={info.maxLength}
      placeholder={info.placeHolder}
      onChange={(e) => {
        try {
          Validation[info.validateType]?.(e.target.value);
          setErrorMessages(updateErrorMessages(errorMessages, index, ''));
          handleInput({
            ...cardInfo,
            [info.property]: e.target.value,
          });
        } catch (error) {
          if (error instanceof Error) {
            setErrorMessages(
              updateErrorMessages(errorMessages, index, error.message)
            );
          }
        }
      }}
    />
  );
}
