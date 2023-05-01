import type { Meta } from '@storybook/react';
import { ExpirationDateInput } from '../../components/addCardForm/cardInfoInputs/ExpirationDateInput';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Input',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const ExpirationDate = () => {
  return (
    <CardInfoProvider>
      <ExpirationDateInput
        viewNextInput={() => {}}
        viewPreviousInput={() => {}}
      />
    </CardInfoProvider>
  );
};
