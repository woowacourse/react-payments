import { Meta } from '@storybook/react';
import { useRef } from 'react';
import CardOwnerName, { CardOwnerNameProps } from './CardOwnerName';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
  tags: ['autodocs'],
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const CardOwnerNameFilled = (args: CardOwnerNameProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardOwnerName {...args} ref={ref} />;
};

CardOwnerNameFilled.args = {
  cardOwnerName: 'NAME',
};

export const CardOwnerNameEmpty = (args: CardOwnerNameProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardOwnerName {...args} ref={ref} />;
};

CardOwnerNameEmpty.args = {
  cardOwnerName: '',
};
