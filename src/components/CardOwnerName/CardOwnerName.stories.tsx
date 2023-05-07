import { Meta } from '@storybook/react';
import { useRef } from 'react';
import CardOwnerName, { CardOwnerNameProps } from './CardOwnerName';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
  tags: ['autodocs'],
} satisfies Meta<typeof CardOwnerName>;

export default meta;

const Template = (args: CardOwnerNameProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardOwnerName {...args} ref={ref} />;
};

Template.args = {
  cardOwnerName: '',
};

export const CardOwnerNameFilled = Template.bind({});
export const CardOwnerNameEmpty = Template.bind({});

CardOwnerNameFilled.args = {
  cardOwnerName: 'NAME',
};

CardOwnerNameEmpty.args = {
  cardOwnerName: '',
};
