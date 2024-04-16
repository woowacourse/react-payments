import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

interface InputGroupType {
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  inputType: typeof CARD_NUMBER | typeof CARD_PERIOD | typeof CARD_OWNER;
}

function InputGroup({ setState, inputType }: InputGroupType) {
  const { title, subtitle, label, placeholders } = inputType;
  const concatStringToArray = (value: string, index: number) => {
    setState((prop: string[]) => {
      const copy: string[] = [...prop];
      copy[index] = value;
      return copy;
    });
  };

  return (
    <>
      <InputTitle title={title} subtitle={subtitle} />
      <label htmlFor="">{label}</label>
      {placeholders.map((placeholder: string, index: number) => {
        return <Input key={index} placeholder={placeholder} setState={(e) => concatStringToArray(e, index)} />;
      })}
      {/* <ErrorMessage></ErrorMessage> */}
    </>
  );
}

export default InputGroup;
