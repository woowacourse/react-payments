import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { informationSectionType, period } from '../types/cardType';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';
import { CARD_DISPLAY_INDEX } from '../constants/cardInformation';

interface InputGroupType {
  setState: React.Dispatch<React.SetStateAction<string[]>>;
  informationSection: informationSectionType;
}

function InputGroup({ setState, informationSection }: InputGroupType) {
  const getType = (informationSection: informationSectionType) => {
    const getTypeTable = {
      number: CARD_NUMBER,
      period: CARD_PERIOD,
      owner: CARD_OWNER,
    };
    return getTypeTable[informationSection];
  };

  const { title, subtitle, label, placeholders } = getType(informationSection);
  const [errorMessage, setErrorMessage] = useState('');

  const updateState = (value: string, index: number) => {
    setState((prevState: string[]) => {
      const updatedState = [...prevState];
      updatedState[index] = value;
      return updatedState;
    });
  };

  return (
    <div css={inputGroupStyle}>
      <div css={inputTitleStyle}>
        <InputTitle title={title} subtitle={subtitle} />
      </div>

      <div css={inputContainerStyle}>
        <label css={labelStyle} htmlFor={informationSection}>
          {label}
        </label>
        <div css={inputBoxStyle}>
          {placeholders.map((placeholder: string, index: number) => {
            const isPassword = index === CARD_DISPLAY_INDEX.third || index === CARD_DISPLAY_INDEX.fourth;
            return (
              <Input
                isPassword={isPassword}
                key={index}
                informationDetail={informationSection === 'period' ? period[index] : informationSection}
                placeholder={placeholder}
                setState={(s) => updateState(s, index)}
                setErrorMessage={setErrorMessage}
              />
            );
          })}
        </div>
        <ErrorMessage value={errorMessage}></ErrorMessage>
      </div>
    </div>
  );
}

const inputGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const inputTitleStyle = css`
  display: flex;
  flex-direction: column;
`;

const labelStyle = css`
  font-size: 12px;
  color: #0a0d13;
`;

const inputContainerStyle = css`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
`;

const inputBoxStyle = css`
  display: flex;
  gap: 10px;
`;

export default InputGroup;
