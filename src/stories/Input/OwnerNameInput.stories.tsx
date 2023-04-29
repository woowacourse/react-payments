import type { Meta } from '@storybook/react';
import { useRef, useState } from 'react';

import { OwnerNameInput } from '../../components/input/OwnerNameInput';

const meta = {
  title: 'Example/Input',
  component: OwnerNameInput,
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;

export const OwnerName = () => {
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
