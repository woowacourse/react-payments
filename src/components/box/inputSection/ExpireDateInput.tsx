import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputArrayStateProps } from '../../../abstracts/types';
import { useEffect, useState } from 'react';

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

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validateExpireDate = (inputMonth: string, inputYear: string) => {
    const date = new Date();

    if (Number(inputMonth) > 12 || Number(inputMonth) === 0) {
      setErrorMessage('1월 부터 12월 까지 입력해주세요.');
    }
    if (Number(inputYear) < 23 || Number(inputMonth) < date.getMonth() + 1) {
      setErrorMessage('만료된 카드입니다.');
    }
    if (inputMonth.length < 2 || inputYear.length < 2) {
      setErrorMessage('각 값은 두글자로 입력해주세요.');
      return;
    }
    setErrorMessage(undefined);
  };

  useEffect(() => {
    validateExpireDate(props.inputArrayValue[0], props.inputArrayValue[1]);
  }, [props.inputArrayValue]);

  return (
    <InputSectionTemplate label="만료일" errorMessage={errorMessage}>
      <InputBox inputs={inputs} align="center" separator="/" {...props} />
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
