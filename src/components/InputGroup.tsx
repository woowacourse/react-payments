import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInfomation';

interface InputGroupType {
  setState: (s: string) => void;
  inputType: typeof CARD_NUMBER | typeof CARD_PERIOD | typeof CARD_OWNER;
}

function InputGroup({ setState, inputType }: InputGroupType) {
  const { title, subtitle, label, placeholders } = inputType;
  return (
    <>
      <InputTitle title={title} subtitle={subtitle} />
      <label htmlFor="">{label}</label>
      {placeholders.map((placeholder: string) => {
        return <Input placeholder={placeholder} setState={(e) => setState(e)} />;
      })}
      {/* <ErrorMessage></ErrorMessage> */}
    </>
  );
}

export default InputGroup;
