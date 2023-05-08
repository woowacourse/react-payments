import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputArrayStateProps } from '../../../abstracts/types';
import useValidation from '../../../hooks/useValidation';

const ExpireDateInput = (props: InputArrayStateProps) => {
  const setInput = (index: number) => (val: string) => {
    const newInputValues = props.inputArrayValue.slice();
    newInputValues[index] = val;
    props.setInputArrayValue(newInputValues);
  };

  const inputs: InputType[] = [
    {
      textType: 'number',
      maxLength: 2,
      placeholder: 'MM',
      required: true,
      inputValue: props.inputArrayValue[0],
      setInputValues: setInput(0),
    },
    {
      textType: 'number',
      maxLength: 2,
      placeholder: 'YY',
      required: true,
      inputValue: props.inputArrayValue[1],
      setInputValues: setInput(1),
    },
  ];

  const { errorMessage } = useValidation(props.inputArrayValue, 'expireDate');

  return (
    <InputSectionTemplate label="만료일" errorMessage={errorMessage}>
      <InputBox inputs={inputs} align="center" separator="/" {...props} />
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
