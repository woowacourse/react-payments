import { Meta } from '@storybook/react';
import CardOwnerName from './CardOwnerName';
import { useRef } from 'react';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const CardOwnerNameStory = () => {
  const cardNumberRefs = useRef<HTMLInputElement>(null);

  return <CardOwnerName nameRef={cardNumberRefs} />;
};
