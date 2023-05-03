import type { Meta } from '@storybook/react';

import { OwnerNameInput } from '../../components/addCardForm/cardInfoInputs/OwnerNameInput';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Input',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;

export const OwnerName = () => {
  return (
    <CardInfoProvider>
      <OwnerNameInput viewNextInput={() => {}} />
    </CardInfoProvider>
  );
};
