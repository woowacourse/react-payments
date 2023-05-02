import { Meta } from '@storybook/react';
import { useRef } from 'react';
import CardOwnerName, { CardOwnerNameProps } from './CardOwnerName';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const CardOwnerNameStory = (args: CardOwnerNameProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardOwnerName {...args} ref={ref} />;
};

CardOwnerNameStory.args = {
  cardOwnerName: 'NAME',
};
