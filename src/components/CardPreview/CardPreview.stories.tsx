import { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';
import { Date } from '../../types/date';

const meta: Meta = {
  title: 'CardPreview',
  component: CardPreview,
};

export default meta;

type CardProps = {
  cardNumbers: string[];
  expirationDate: Date;
  ownerName: string;
};

export const DefaultCard: StoryObj<CardProps> = (args: any) => (
  <CardPreview {...args} cardNumbers={['1111', '1111', '1111', '1111']} />
);
DefaultCard.args = {
  ownerName: 'PARAN',
  expirationDate: { month: '02', year: '40' },
};

export const VisaCard: StoryObj<CardProps> = (args: any) => (
  <CardPreview {...args} cardNumbers={['4111', '1111', '1111', '1111']} />
);
VisaCard.args = {
  ownerName: 'CHICO',
  expirationDate: { month: '01', year: '25' },
};

export const MasterCard: StoryObj<CardProps> = (args: any) => (
  <CardPreview {...args} cardNumbers={['5210', '1111', '1111', '1111']} />
);
MasterCard.args = {
  ownerName: 'PAKXE',
  expirationDate: { month: '06', year: '24' },
};
