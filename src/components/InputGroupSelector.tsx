import { css } from '@emotion/react';
import ErrorMessage from './ErrorMessage';
import InputTitle from './InputTitle';
import { InputChangePropsType, informationSectionType } from '../types/card';
import {
  CARD_CVC,
  CARD_NUMBER,
  CARD_OWNER,
  CARD_PASSWORD,
  CARD_PERIOD,
  CARD_PROVIDER,
} from '../constants/inputInformation';
import Selector from './Selector';

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

interface InputGroupType {
  onInputChange: ({ value, index, inputSection }: InputChangePropsType) => void;
  informationSection: informationSectionType;
  isError: boolean[];
  errorMessage: string;
}

function InputGroupSelector({ onInputChange, isError, errorMessage, informationSection }: InputGroupType) {
  const getTypeTable = {
    number: CARD_NUMBER,
    period: CARD_PERIOD,
    owner: CARD_OWNER,
    provider: CARD_PROVIDER,
    cvc: CARD_CVC,
    password: CARD_PASSWORD,
  };

  const { title, subtitle } = getTypeTable[informationSection];

  return (
    <div css={inputGroupStyle}>
      <div css={inputTitleStyle}>
        <InputTitle title={title} subtitle={subtitle} />
      </div>

      <div css={inputContainerStyle}>
        <div css={inputBoxStyle}>
          <Selector onInputChange={(provider: string) => onInputChange({ value: provider, index: 0 })} />
        </div>
        {isError && <ErrorMessage value={errorMessage} />}
      </div>
    </div>
  );
}

export default InputGroupSelector;
