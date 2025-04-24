import type { Meta } from '@storybook/react';

import { CardNumberForm } from '@/components/features/CardFormFiled/CardNumberForm';
import { CardPasswordForm } from '@/components/features/CardFormFiled/CardPasswordForm';
import { CVCForm } from '@/components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '@/components/features/CardFormFiled/ExpireDateForm';
import { useCardInput } from '@/hooks/useCardInput';
import { useExpireDateInput } from '@/hooks/useExpireDateInput';

const meta = {
  title: 'features/CardFormFiled',
  component: CardNumberForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '카드 번호, 유효기간, CVC 입력을 위한 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof CardNumberForm>;

export default meta;

export const CardNumberFormStory = () => {
  const { value: cardNumbers, errorMessage, handleChange, handleBlur } = useCardInput('cardNumber');

  return (
    <CardNumberForm
      cardNumbers={cardNumbers}
      errorMessage={errorMessage}
      onCardInputChange={handleChange}
      onCardInputBlur={handleBlur}
    />
  );
};

export const ExpireDateFormStory = () => {
  const { value: expireNumber, errorMessage, handleChange, handleBlur } = useExpireDateInput();

  return (
    <ExpireDateForm
      expireDate={expireNumber}
      errorMessage={errorMessage}
      onCardExpireDateInputChange={handleChange}
      onCardExpireDateInputBlur={handleBlur}
    />
  );
};

export const CVCFormStory = () => {
  const { value: cvcNumber, errorMessage, handleChange, handleBlur } = useCardInput('CVC');

  return (
    <CVCForm
      cvcNumber={cvcNumber}
      errorMessage={errorMessage}
      onCardInputChange={handleChange}
      onCardInputBlur={handleBlur}
    />
  );
};

export const CardPasswordFormStory = () => {
  const { value: password, errorMessage, handleChange, handleBlur } = useCardInput('password');

  return (
    <CardPasswordForm
      password={password}
      errorMessage={errorMessage}
      onCardInputChange={handleChange}
      onCardInputBlur={handleBlur}
    />
  );
};
