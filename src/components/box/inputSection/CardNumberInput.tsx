import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputArrayStateProps } from '../../../abstracts/types';
import useValidation from '../../../hooks/useValidation';

const CardNumberInput = (props: InputArrayStateProps) => {
  const setInput = (index: number) => (val: string) => {
    const newInputValue = props.inputArrayValue.slice();
    newInputValue[index] = val;
    props.setInputArrayValue(newInputValue);
  };

  const inputs: InputType[] = [
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '1234',
      required: true,
      inputValue: props.inputArrayValue[0],
      setInputValues: setInput(0),
    },
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '5678',
      required: true,
      inputValue: props.inputArrayValue[1],
      setInputValues: setInput(1),
    },
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '∙∙∙∙',
      required: true,
      textSecurity: true,
      inputValue: props.inputArrayValue[2],
      setInputValues: setInput(2),
    },
    {
      textType: 'number',
      maxLength: 4,
      placeholder: '∙∙∙∙',
      required: true,
      textSecurity: true,
      inputValue: props.inputArrayValue[3],
      setInputValues: setInput(3),
    },
  ];

  const { errorMessage } = useValidation(props.inputArrayValue, 'cardNumber');

  return (
    <InputSectionTemplate label="카드 번호" errorMessage={errorMessage}>
      <InputBox inputs={inputs} align="center" separator="-" isFullWidth {...props} />
    </InputSectionTemplate>
  );
};

export default CardNumberInput;
