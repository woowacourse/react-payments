import FormField, { type FormFieldProps } from '../ui/FormField.tsx';
import { css } from '@emotion/react';
import type { CardInfo } from '../../types.ts';
import type { ChangeEvent } from 'react';

const options = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];
const placeholder = '카드사를 선택해주세요';

interface CardCompanyFieldProps {
  value: CardInfo['cardCompany'];
  onUpdated: (value: CardInfo['cardCompany']) => void;
  onCompleted: () => void;
}

export default function CardCompanyField({ value, onUpdated, onCompleted }: CardCompanyFieldProps) {
  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '카드사를 선택해 주세요',
    caption: '현재 국내 카드사만 가능합니다.',
    error: false,
    errorMessage: '',
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onUpdated(e.target.value as CardInfo['cardCompany']);
    onCompleted();
  };

  return (
    <FormField {...formFieldProps}>
      <select
        autoFocus
        defaultValue={placeholder}
        css={[selectStyle, variants[value === null ? 'placeholder' : 'default']]}
        onChange={handleChange}
      >
        <option css={placeholderStyle}>{value ?? placeholder}</option>
        {options.map((option) => (
          <option key={option} role="option" css={optionStyle} onClick={() => {}}>
            {option}
          </option>
        ))}
      </select>
    </FormField>
  );
}

const selectStyle = css`
  appearance: base-select;
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: 1px solid var(--color-border-default);
  padding: 8px;
  cursor: pointer;

  font-size: 11px;
  line-height: 135%;

  ::picker(select) {
    appearance: base-select;
    top: anchor(bottom);
    margin-top: 4px;
    border: 1px solid var(--color-border-default);
    border-radius: 5px;
  }

  ::picker-icon {
    content: url('/chevron.svg');
    opacity: 0.4;
  }

  :focus-within {
    outline: none;
    border: 1px solid var(--color-border-focus);

    ::picker-icon {
      content: url('/chevron.svg');
      opacity: 1;
    }
  }

  :hover {
    background-color: white;
  }
`;

const placeholderStyle = css`
  display: none;
`;

const variants = {
  default: css`
    color: var(--color-text-default);
  `,
  placeholder: css`
    color: var(--color-text-placeholder);
  `,
};

const optionStyle = css`
  list-style: none;
  width: 100%;
  padding: 8px 10px;
  color: #4f4f4f;
  background-color: white;
  cursor: pointer;
  text-align: left;

  font-weight: 400;
  font-size: 10px;
  line-height: 140%;

  :hover {
    background-color: #eeeeee;
  }

  :active {
    background-color: #eeeeee;
  }

  :focus {
    outline: none;
    background-color: #eeeeee;
  }

  :first-of-type {
    border-radius: 5px 5px 0 0;
  }

  :last-of-type {
    border-radius: 0 0 5px 5px;
  }

  ::checkmark {
    display: none;
  }
`;
