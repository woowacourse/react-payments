import { css } from '@emotion/react';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { CardInfo } from '../../pages/AddCardPage';

interface CardNumbersFieldProps {
  value: CardInfo['cardNumbers'];
  onUpdated: (value: CardInfo['cardNumbers']) => void;
}

export default function CardNumbersField({ value, onUpdated }: CardNumbersFieldProps) {
  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '결제할 카드 번호를 입력해 주세요',
    caption: '본인 명의의 카드만 결제 가능합니다.',
    error: false,
    errorMessage: '',
  };

  return (
    <FormField {...formFieldProps}>
      <fieldset>
        <legend css={legendStyle}>카드 번호</legend>
        <div css={inputGroupStyle}>
          {value.map((number, index) => (
            <Input key={index} value={number} type="text" inputMode="numeric" placeholder="1234" maxLength={4} />
          ))}
        </div>
      </fieldset>
    </FormField>
  );
}

const legendStyle = css`
  margin-bottom: 8px;
`;

const inputGroupStyle = css`
  display: flex;
  gap: 10px;
`;
