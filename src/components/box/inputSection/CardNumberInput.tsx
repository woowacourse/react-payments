import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../abstracts/types';
import Input from '../../common/Input';
import { Dispatch, SetStateAction } from 'react';

const CardNumberInput = (props: InputStateProps) => {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 4, placeholder: '1234', required: true },
    { textType: 'number', maxLength: 4, placeholder: '5678', required: true },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙', required: true, textSecurity: true },
    { textType: 'number', maxLength: 4, placeholder: '∙∙∙∙', required: true, textSecurity: true },
  ];
  return (
    <InputSectionTemplate label="카드 번호">
      {/* <Input number={props.inputValues as string} setInput={props.setInputValues} /> */}
      <InputBox inputs={inputs} align="center" separator="-" isFullWidth {...props} />
    </InputSectionTemplate>
  );
};

export default CardNumberInput;
