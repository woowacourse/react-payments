import styles from './App.module.css';
import './index.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import { InputSection } from './components/InputSection/InputSection';

function useInputGroup(length: number, validateFn: (value: string, index: number) => boolean) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const [validity, setValidity] = useState<boolean[]>(Array(length).fill(true));

  const handleChange = (index: number, value: string) => {
    const isValid = validateFn(value, index);

    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);

    const updatedValidity = [...validity];
    updatedValidity[index] = isValid;
    setValidity(updatedValidity);
  };

  const isError = () => {
    return validity.includes(false);
  };

  return {
    values,
    validity,
    handleChange,
    isError
  };
}

export default function App() {
  const cardNumberGroup = useInputGroup(4, (v) => /^[0-9]*$/.test(v));

  const expirationGroup = useInputGroup(2, (v, i) => {
    if (!/^[0-9]*$/.test(v)) return false;
    const num = +v;
    return i === 0 ? num >= 1 && num <= 12 : v.length === 2;
  });

  return (
    <div>
      <Card numbers={cardNumberGroup.values} />

      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="카드번호" />
      <InputSection.InputWrapper
        numbers={cardNumberGroup.values}
        onChange={cardNumberGroup.handleChange}
        valid={cardNumberGroup.validity}
        placeholders={['1234', '1234', '1234', '1234']}
        maxLength={4}
      />
      {cardNumberGroup.isError() && <InputSection.Error message={'숫자만 입력 가능합니다.'} />}

      <InputSection.TitleWrapper>
        <InputSection.Title title="카드 유효기간을 입력해 주세요" />
        <InputSection.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="유효기간" />
      <InputSection.InputWrapper
        numbers={expirationGroup.values}
        onChange={expirationGroup.handleChange}
        valid={expirationGroup.validity}
        placeholders={['MM', 'YY']}
        maxLength={2}
      />
      {expirationGroup.isError() && <InputSection.Error message={'숫자만 입력 가능합니다.'} />}
    </div>
  );
}
