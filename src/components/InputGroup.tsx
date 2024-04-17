import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { SectionType } from '../types/cardType';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

interface InputGroupType {
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  section: SectionType;
}

type PeriodType = 'month' | 'year';

function InputGroup({ setState, section }: InputGroupType) {
  const getType = (section: SectionType) => {
    const getTypeTable = {
      number: CARD_NUMBER,
      period: CARD_PERIOD,
      owner: CARD_OWNER,
    };
    return getTypeTable[section];
  };

  const { title, subtitle, label, placeholders } = getType(section);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const updateState = (value: string, index: number) => {
    setState((prevState: string[]) => {
      const updatedState = [...prevState];
      updatedState[index] = value;
      return updatedState;
    });
  };

  return (
    <>
      <InputTitle title={title} subtitle={subtitle} />
      <label htmlFor="">{label}</label>
      {placeholders.map((placeholder: string, index: number) => {
        const test: PeriodType[] = ['month', 'year'];

        return (
          <Input
            keyProp={section + index.toString()}
            type={section === 'period' ? test[index] : section}
            placeholder={placeholder}
            setState={(s) => updateState(s, index)}
            setErrorMessage={setErrorMessage}
          />
        );
      })}

      <ErrorMessage value={errorMessage}></ErrorMessage>
    </>
  );
}

export default InputGroup;
