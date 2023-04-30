import type { Meta } from '@storybook/react';
import { useState } from 'react';
import type { CreditCard, Month, Year } from '../types/CreditCard';
import { CardNumberInput } from './CardNumberInput';
import { CardPasswordInput } from './CardPasswordInput';
import { ExpirationDateInput } from './ExpirationDateInput';
import {
  Container,
  FormGroup,
  FormGroupLabel,
  NewCreditCardPageContent,
} from './NewCreditCardPageContent';
import { Input } from './common/Input';
import { NumberInput } from './common/NumberInput';
import { Text } from './common/Text';

const meta = {
  title: 'NewCreditCardPageContent',
  component: NewCreditCardPageContent,
} satisfies Meta<typeof NewCreditCardPageContent>;

export default meta;

export const NewCreditCardForm = () => {
  const [resisteringCreditCard, setResisteringCreditCard] = useState<CreditCard>({
    cardCompany: '카드사',
    cardNumbers: '',
    expirationDate: ['', ''],
    name: '',
    cvc: '',
    password: '',
    nickName: '',
  });

  const setNewCardField = <Field extends keyof CreditCard>(
    field: Field,
    value: CreditCard[Field],
  ) => {
    setResisteringCreditCard({ ...resisteringCreditCard, [field]: value });
  };

  const handleCardNumbersChange = (value: string) => {
    setNewCardField('cardNumbers', value);
  };

  const handleExpirationDateChange = (value: [Month, Year]) => {
    setNewCardField('expirationDate', value);
  };

  const handleCardNameChange = (value: string) => {
    setNewCardField('name', value);
  };

  const handleCVCNumberChange = (value: string) => {
    setNewCardField('cvc', value);
  };

  const handleCardPasswordChange = (value: string) => {
    setNewCardField('password', value);
  };

  return (
    <Container>
      <FormGroup>
        <Text size="small">카드 번호</Text>
        <CardNumberInput
          value={resisteringCreditCard.cardNumbers}
          onChange={handleCardNumbersChange}
        />
      </FormGroup>

      <FormGroup>
        <Text size="small">만료일</Text>
        <ExpirationDateInput
          value={resisteringCreditCard.expirationDate}
          onChange={handleExpirationDateChange}
        />
      </FormGroup>

      <FormGroup>
        <FormGroupLabel>
          <Text size="small">카드 소유자 이름(선택)</Text>
          <Text size="small">{resisteringCreditCard.name.length} / 30</Text>
        </FormGroupLabel>
        <Input
          maxCount={30}
          value={resisteringCreditCard.name}
          onChange={handleCardNameChange}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </FormGroup>

      <FormGroup>
        <Text size="small">보안 코드</Text>
        <NumberInput
          maxCount={3}
          value={resisteringCreditCard.cvc}
          onChange={handleCVCNumberChange}
          width={8}
          center
          type="password"
        />
      </FormGroup>

      <FormGroup>
        <Text size="small">카드 비밀번호</Text>
        <CardPasswordInput
          value={resisteringCreditCard.password}
          onChange={handleCardPasswordChange}
        />
      </FormGroup>
    </Container>
  );
};
