import type { Meta, StoryFn } from '@storybook/react';
import { OwnerNameInput } from 'components/Input';
import { useRef, useState } from 'react';

const meta = {
  title: 'Payments/Card/OwnerNameInput',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;
type Story = StoryFn<typeof meta>;

export const OwnerName: Story = () => {
  const ownerNameInputRef = useRef(null);
  const [ownerName, setOwnerName] = useState('');

  return (
    <OwnerNameInput
      ownerNameInputRef={ownerNameInputRef}
      ownerName={ownerName}
      setOwnerName={setOwnerName}
    />
  );
};
