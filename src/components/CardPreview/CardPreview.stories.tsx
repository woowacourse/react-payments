import { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';
import { Date } from '../../types/date';
import { CardCompany } from '../../types/cardCompany';

const meta: Meta = {
  title: 'CardPreview',
  component: CardPreview,
};

export default meta;

type CardProps = {
  cardNumbers: string[];
  expirationDate: Date;
  ownerName: string;
  cardCompany: CardCompany | null;
  CVCNumbers: string;
};

export const DefaultCard: StoryObj<CardProps> = (args: any) => <CardPreview {...args} />;
DefaultCard.args = {
  ownerName: 'PARAN',
  expirationDate: { month: '02', year: '40' },
  CVCNumbers: '123',
  cardNumbers: ['1111', '1111', '1111', '1111'],
  cardCompany: 'BC',
};

export const VisaCard: StoryObj<CardProps> = (args: any) => <CardPreview {...args} />;
VisaCard.args = {
  ownerName: 'CHICO',
  CVCNumbers: '123',
  expirationDate: { month: '01', year: '25' },
  cardNumbers: ['4111', '1111', '1111', '1111'],
  cardCompany: 'BC',
};

export const MasterCard: StoryObj<CardProps> = (args: any) => <CardPreview {...args} />;
MasterCard.args = {
  ownerName: 'PAKXE',
  expirationDate: { month: '06', year: '24' },
  CVCNumbers: '123',
  cardNumbers: ['5210', '1111', '1111', '1111'],
  cardCompany: 'BC',
};

export const DefaultCardWithCardCompany: StoryObj<CardProps> = (args: any) => (
  <>
    <CardPreview {...args} cardCompany={'BC'} />
    <CardPreview {...args} cardCompany={'HANA'} />
    <CardPreview {...args} cardCompany={'HYUNDAI'} />
    <CardPreview {...args} cardCompany={'KAKAO'} />
    <CardPreview {...args} cardCompany={'KOOKMIN'} />
    <CardPreview {...args} cardCompany={'LOTTE'} />
    <CardPreview {...args} cardCompany={'SHINHAN'} />
    <CardPreview {...args} cardCompany={'WOORI'} />
  </>
);
DefaultCardWithCardCompany.args = {
  ownerName: 'PAKXE',
  expirationDate: { month: '06', year: '24' },
  CVCNumbers: '123',
  cardNumbers: ['1210', '1111', '1111', '1111'],
};
