import { Meta } from '@storybook/react';
import CardOwnerName from './CardOwnerName';
import { useState } from 'react';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const CardOwnerNameStory = () => {
  const [ownerName, setOwnerName] = useState('');

  return <CardOwnerName ownerName={ownerName} setOwnerName={setOwnerName} />;
};
