import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../abstracts/types';

const ExpireDateInput = (props: InputStateProps) => {
  const setInput = (index: number) => (val: string) => {
    const newInputValues = props.inputValues.slice() as string[];
    newInputValues[index] = val;
    props.setInputValues(newInputValues);
  };

  const inputs: InputType[] = [
    {
      textType: 'number',
      maxLength: 2,
      placeholder: 'YY',
      required: true,
      inputValues: props.inputValues[0],
      setInputValues: setInput(0),
    },
    {
      textType: 'number',
      maxLength: 2,
      placeholder: 'MM',
      required: true,
      inputValues: props.inputValues[1],
      setInputValues: setInput(1),
    },
  ];
  return (
    <InputSectionTemplate label="만료일">
      <InputBox inputs={inputs} align="center" separator="/" {...props} />
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
