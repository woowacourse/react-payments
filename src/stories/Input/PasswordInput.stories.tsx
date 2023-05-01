import type { Meta } from '@storybook/react';

import { PasswordInput } from '../../components/addCardForm/cardInfoInputs/PasswordInput';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Input',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Password = () => {
  return (
    <CardInfoProvider>
      <PasswordInput
        handleSubmitNewCardInfo={() => {}}
        viewPreviousInput={() => {}}
      />
    </CardInfoProvider>
  );
};
