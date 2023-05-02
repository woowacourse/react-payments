import { StoryObj } from '@storybook/react';
import CardInputForm from '../components/CardInputForm';

const meta = {
  title: 'CardInputForm',
  component: CardInputForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

const card = {
  cardNumber: '1232 - 2323 - 5455 - 6748',
  expiredDate: '13 / 24',
  ownerName: 'Patrick',
  cvc: '345',
  password: ['1', '9'],
  color: 'black',
  bankName: '패트릭카드',
};

export const CardForm: Story = {
  args: {
    card: card,
    setCard: () => {},
    onSubmit: () => {},
  },
};
