import type { Meta } from '@storybook/react';

import { CardNumberForm } from '@/components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from '@/components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '@/components/features/CardFormFiled/ExpireDateForm';
import { useCardInput } from '@/hooks/useCardInput';

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
  const { value: cardNumbers, handleChange, handleBlur } = useCardInput(4, 4);

  return <CardNumberForm cardNumbers={cardNumbers} onChange={handleChange} onBlur={handleBlur} />;
};

export const ExpireDateFormStory = () => {
  const { value: expireNumber, handleChange, handleBlur } = useCardInput(2, 2);

  return <ExpireDateForm expireDate={expireNumber} onChange={handleChange} onBlur={handleBlur} />;
};

export const CVCFormStory = () => {
  return <CVCForm />;
};
