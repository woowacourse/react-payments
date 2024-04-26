import { Meta, StoryObj } from '@storybook/react';
import CompleteAddNewCardPage from './CompleteAddNewCardPage';

const meta: Meta = {
  title: 'CompleteAddNewCardPage',
  component: CompleteAddNewCardPage,
};

export default meta;

type CardProps = {
  cardNumbers: string[];
  date: Date;
  ownerName: string;
};

export const Default: StoryObj<CardProps> = (args: any) => (
  <CompleteAddNewCardPage cardCompany='KAKAO' firstCardNumberUnit='0324' />
);
Default.args = {};
