import { StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import CardInputForm from '../components/CardInputForm';

const meta = {
  title: 'CardInputForm',
  component: CardInputForm,
};
  
export default meta;
type Story = StoryObj<typeof meta>;

const cardSuccess = {
  cardNumber: '1232 - 2323 - 5455 - 6748',
  expiredDate: '12 / 24',
  ownerName: 'PATRICK',
  cvc: '345',
  password: ['1', '9'],
  color: 'black',
  bankName: '패트릭카드',
};

const cardFaild = {
  cardNumber: 'ㅁㄴㅇㅁㄴㅇ',
  expiredDate: '13 / 24',
  ownerName: '은수',
  cvc: 'ㅏ',
  password: ['ㅏ', '9'],
  color: 'black',
  bankName: '패트릭카드',
};

export const CardFormSuccess: Story = {
  args: {
    card: cardSuccess,
    setCard: () => {},
    onSubmit: () => {},
  },
};

export const CardFormFailed: Story = {
  args: {
    card: cardFaild,
    setCard: () => {},
    onSubmit: () => {},
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNumberInput = canvas.getByPlaceholderText('카드 번호를 입력해 주세요.');

    await userEvent.type(cardNumberInput, 'ㅁㄴㅇㅁㄴㅇ', {
      delay: 100,
    });
  },
};