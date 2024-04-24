import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import { InputChangePropsType, informationSectionType } from '../types/card';
import { CARD_CVC, CARD_NUMBER, CARD_OWNER, CARD_PERIOD, CARD_PROVIDER, PERIOD } from '../constants/inputInformation';
import { CARD_DISPLAY_INDEX } from '../constants/cardInformation';

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
}

function InputGroup({ onInputChange, informationSection, isError, errorMessage }: InputGroupType) {
  const getTypeTable = {
    number: CARD_NUMBER,
    period: CARD_PERIOD,
    owner: CARD_OWNER,
    provider: CARD_PROVIDER,
    cvc: CARD_CVC,
  };

  const { title, subtitle, label, placeholders, maxLength } = getTypeTable[informationSection];

  const getInputType = (type: informationSectionType, index: number) => {
    if (type === 'number' && (index === CARD_DISPLAY_INDEX.third || index === CARD_DISPLAY_INDEX.fourth))
      return 'password';
    if (type === 'number' || type === 'period') return 'number';
    return 'input';
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
            const inputSection = informationSection === 'period' ? PERIOD[index] : informationSection;

            return (
              <Input
                key={index}
                maxLength={maxLength}
                type={getInputType(informationSection, index)}
                placeholder={placeholder}
                onStateChange={(value) => onInputChange({ value, index, inputSection })}
                inputCss={inputStyle({
                  borderColor: isError[index] ? '#FF3D3D' : '#acacac',
                  focusColor: isError[index] ? '#FF3D3D' : '#000',
                })}
              />
            );
          })}
        </div>
        <ErrorMessage value={errorMessage} />
      </div>
    </div>
  );
}

export default InputGroup;
