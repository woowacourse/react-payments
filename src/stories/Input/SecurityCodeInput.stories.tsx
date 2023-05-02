import type { Meta } from '@storybook/react';

import { SecurityCodeInput } from '../../components/addCardForm/cardInfoInputs/SecurityCodeInput';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Input',
  component: SecurityCodeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

export const SecurityCode = () => {
  return (
    <CardInfoProvider>
      <SecurityCodeInput viewNextInput={() => {}} />
    </CardInfoProvider>
  );
};
