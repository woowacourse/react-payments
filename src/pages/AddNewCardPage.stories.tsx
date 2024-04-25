import { Meta, StoryObj } from '@storybook/react';
import AddNewCardPage from './AddNewCardPage';

const meta: Meta = {
  title: 'AddNewCardPage',
  component: AddNewCardPage,
};

export default meta;

type CardProps = {
  cardNumbers: string[];
  date: Date;
  ownerName: string;
};

export const Default: StoryObj<CardProps> = (args: any) => <AddNewCardPage />;
Default.args = {};
