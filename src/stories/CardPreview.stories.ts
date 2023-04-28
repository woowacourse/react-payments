import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/common/CardPreview/CardPreview';
import { cardImages } from '../pages/cardImages';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPreview>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    cardIssuer: '신한은행',
    cardNumber: '1234-5678-9012-3456',
    cardExpirationDate: '01/21',
    cardOwnerName: '요술토끼',
    image: cardImages['신한카드'],
  },
};

export const Empty: Story = {
  args: {
    cardIssuer: '',
    cardNumber: '',
    cardExpirationDate: '',
    cardOwnerName: '',
  },
};

export const EmptyWithImage: Story = {
  args: {
    cardIssuer: '',
    cardNumber: '',
    cardExpirationDate: '',
    cardOwnerName: '',
    image: cardImages['신한카드'],
  },
};

export const ExtraName: Story = {
  args: {
    cardIssuer: '신한은행',
    cardName: '요술토끼의 나라사랑 체크카드',
    cardNumber: '1234-5678-9012-3456',
    cardExpirationDate: '01/21',
    cardOwnerName: '요술토끼',
    image: cardImages['신한카드'],
  },
};

export const Overflow: Story = {
  args: {
    cardIssuer: '신한은행',
    cardName:
      '카드 소유자 이름이 너무 길어서 다 표시하기에는 너무 내용이 많고 어쨌든간에 적절하게 랜더링은 해야겠는데 어떻게 하면 좋을 지 모르겠습니다.',
    cardNumber: '1234-5678-9012-3456',
    cardExpirationDate: '01/21',
    cardOwnerName:
      '여기에 이제 카드 사용자의 이름을 적어야 할 텐데 여기에 오는 이름이 너무 길어서 전부 표시하기가 힘든 상황입니다.',
    image: cardImages['신한카드'],
  },
};

export default meta;
