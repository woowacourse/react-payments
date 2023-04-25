import { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/card/Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

//title,cardNumberSet,owner,expiracy
export const EmptyCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '',
    month: 'MM',
    year: 'YY',
  },
};

export const OnlyEightCard: Story = {
  args: {
    cardNumberSet: ['1234', '1234', '', ''],
    owner: 'NAME',
    month: 'MM',
    year: 'YY',
  },
};

export const OnlyOwnerCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '김아무개씨 Victory',
    month: 'MM',
    year: 'YY',
  },
};

export const OnlyMonthCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '',
    month: '12',
    year: 'YY',
  },
};

export const nameLengthThirtyCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차',
    month: '12',
    year: 'YY',
  },
};

export const FullfilledCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '21',
  },
};
