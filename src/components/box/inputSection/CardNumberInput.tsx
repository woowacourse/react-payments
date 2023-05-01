import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../abstracts/types';

const CardNumberInput = (props: InputStateProps) => {
  const setInput = (index: number) => (val: string) => {
    const newInputValues = props.inputValues.slice() as string[];
    newInputValues[index] = val;
    props.setInputValues(newInputValues);
  };

  const inputs: InputType[] = [
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '1234',
      required: true,
      inputValues: props.inputValues[0],
      setInputValues: setInput(0),
    },
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '5678',
      required: true,
      inputValues: props.inputValues[1],
      setInputValues: setInput(1),
    },
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '∙∙∙∙',
      required: true,
      textSecurity: true,
      inputValues: props.inputValues[2],
      setInputValues: setInput(2),
    },
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '∙∙∙∙',
      required: true,
      textSecurity: true,
      inputValues: props.inputValues[3],
      setInputValues: setInput(3),
    },
  ];
  return (
    <InputSectionTemplate label="카드 번호">
      <InputBox inputs={inputs} align="center" separator="-" isFullWidth {...props} />
    </InputSectionTemplate>
  );
};

export default CardNumberInput;
