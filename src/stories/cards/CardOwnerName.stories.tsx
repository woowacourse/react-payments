import type { Meta } from '@storybook/react';
import CardOwnerName from '../../components/CardAddForm/CardOwnerName/CardOwnerName';
import { useState } from 'react';

const meta = {
  title: 'Payments/Cards/CardOwnerNameInput',
  component: CardOwnerName,
  tags: ['autodocs'],
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const Default = () => {
  const [ownerName, setOwnerName] = useState('');

  return (
    <CardOwnerName
      onInputChange={(event) => {
        setOwnerName(event.target.value);
      }}
      value={ownerName}
    ></CardOwnerName>
  );
};
