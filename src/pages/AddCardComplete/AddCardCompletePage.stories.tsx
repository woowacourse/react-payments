import AddCardCompletePage from './AddCardCompletePage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/AddCardCompletePage',
  component: AddCardCompletePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '카드 추가 후 등록 페이지 컴포넌트입니다. 카드 번호의 첫 번째 4자리 수와 카드 브랜드의 정보를 포함합니다.',
      },
    },
  },
} satisfies Meta<typeof AddCardCompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    initialEntries: [
      {
        pathname: '/complete',
        state: {
          cardNumber: {
            first: '5134',
            second: '2312',
            third: '1232',
            fourth: '2353',
          },
          cardBrandTypeState: 'BC카드',
        },
      },
    ],
  },
};

export const 국민카드: Story = {
  parameters: {
    initialEntries: [
      {
        pathname: '/complete',
        state: {
          cardNumber: {
            first: '9876',
            second: '5432',
            third: '1098',
            fourth: '7654',
          },
          cardBrandTypeState: '국민카드',
        },
      },
    ],
  },
};

export const 신한카드: Story = {
  parameters: {
    initialEntries: [
      {
        pathname: '/complete',
        state: {
          cardNumber: {
            first: '1234',
            second: '5678',
            third: '9012',
            fourth: '3456',
          },
          cardBrandTypeState: '신한카드',
        },
      },
    ],
  },
};
