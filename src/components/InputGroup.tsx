import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import { InputChangePropsType, informationSectionType } from '../types/card';
import {
  CARD_CVC,
  CARD_NUMBER,
  CARD_OWNER,
  CARD_PASSWORD,
  CARD_PERIOD,
  CARD_PROVIDER,
  PERIOD,
} from '../constants/inputInformation';
import { CARD_DISPLAY_INDEX } from '../constants/cardInformation';
import Selector from './Selector';
import { useRef, useState } from 'react';

const inputGroupStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const inputTitleStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

const labelStyle = css({
  fontSize: '12px',
  color: '#0a0d13',
});

const inputContainerStyle = css({
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  width: '100%',
});

const inputBoxStyle = css({
  display: 'flex',
  gap: '10px',
});

const inputStyle = ({ borderColor, focusColor }: { borderColor: string; focusColor: string }) =>
  css({
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    padding: '8px',
    fontSize: '11px',
    outline: 'none',
    width: '100%',

    '&:active, &:focus': {
      borderColor: `${focusColor}`,
    },

    '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: '0',
    },
  });

interface InputGroupType {
  onInputChange: ({ value, index, inputSection }: InputChangePropsType) => void;
  informationSection: informationSectionType;
  isError: boolean[];
  errorMessage: string;
  onBlur?: () => void;
  onFocus?: () => void;
}

function InputGroup({ onInputChange, informationSection, isError, errorMessage, onBlur, onFocus }: InputGroupType) {
  const getTypeTable = {
    number: CARD_NUMBER,
    period: CARD_PERIOD,
    owner: CARD_OWNER,
    provider: CARD_PROVIDER,
    cvc: CARD_CVC,
    password: CARD_PASSWORD,
  };

  const { title, subtitle, label, placeholders, maxLength } = getTypeTable[informationSection];

  const getInputType = (type: informationSectionType, index: number) => {
    if (
      type === 'password' ||
      (type === 'number' && [CARD_DISPLAY_INDEX.third, CARD_DISPLAY_INDEX.fourth].includes(index))
    )
      return 'password';
    if (type === 'number' || type === 'period') return 'number';
    return 'input';
  };

  const [isClicked, setIsClicked] = useState(new Array(placeholders.length).fill(false));

  const handleClicked = (index: number) => {
    if (isClicked[index]) return;
    setIsClicked((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
  };
  const inputRefs = useRef(Array(placeholders.length).fill(null));

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
            const inputSection = informationSection === 'period' ? PERIOD[index] : informationSection;

            if (informationSection === 'provider') {
              return (
                <Selector
                  key={index}
                  onInputChange={(provider: string) => onInputChange({ value: provider, index: 0 })}
                  isError={isError}
                  errorMessage={errorMessage}
                />
              );
            }

            return (
              <Input
                key={index}
                maxLength={maxLength}
                type={getInputType(informationSection, index)}
                placeholder={placeholder}
                onStateChange={(value) => onInputChange({ value, index, inputSection })}
                inputCss={inputStyle({
                  borderColor: isError[index] && isClicked[index] ? '#FF3D3D' : '#acacac',
                  focusColor: isError[index] && isClicked[index] ? '#FF3D3D' : '#000',
                })}
                onHandleClicked={() => handleClicked(index)}
                onBlur={onBlur}
                onFocus={onFocus}
                autoFocus={index === 0}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
              />
            );
          })}
        </div>
        {isError && <ErrorMessage value={errorMessage} />}
      </div>
    </div>
  );
}

export default InputGroup;
