import type { Meta } from '@storybook/react';

import { CardNumberInput } from '../../components/addCardForm/cardInfoInputs/CardNumberInput';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Input',
  component: CardNumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => {
  return (
    <CardInfoProvider>
      <CardNumberInput viewNextInput={() => {}} />
    </CardInfoProvider>
  );
};
