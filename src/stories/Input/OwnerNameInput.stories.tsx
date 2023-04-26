import React, { useState } from 'react';
import type { Meta } from '@storybook/react';

import { OwnerNameInput } from '../../components/input/OwnerNameInput';

const meta = {
  title: 'Example/Input',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;

export const OwnerName = () => {
  const [ownerName, setOwnerName] = useState('');

  return (
    <OwnerNameInput
      ownerName={ownerName}
      setOwnerName={setOwnerName}
      viewNextInput={() => {}}
      viewPreviousInput={() => {}}
    />
  );
};
