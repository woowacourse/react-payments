import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { Date } from '../../types/date';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

type CardProps = {
  cardNumbers: string[];
  date: Date;
  ownerName: string;
};

export const DefaultCard: StoryObj<CardProps> = (args: any) => (
  <Card {...args} cardNumbers={['1111', '1111', '1111', '1111']} />
);
DefaultCard.args = {
  ownerName: 'PARAN',
  date: { month: '02', year: '40' },
};

export const VisaCard: StoryObj<CardProps> = (args: any) => (
  <Card {...args} cardNumbers={['4111', '1111', '1111', '1111']} />
);
VisaCard.args = {
  ownerName: 'CHICO',
  date: { month: '01', year: '25' },
};

export const MasterCard: StoryObj<CardProps> = (args: any) => (
  <Card {...args} cardNumbers={['5210', '1111', '1111', '1111']} />
);
MasterCard.args = {
  ownerName: 'PAKXE',
  date: { month: '06', year: '24' },
};
