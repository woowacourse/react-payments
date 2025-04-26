import AddCardComplete from './AddCardComplete';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router';

const withRouter =
  (initialState: {
    cardNumber:
      | { first: string; second: string; third: string; fourth: string }
      | { first: string; second: string; third: string; fourth: string }
      | { first: string; second: string; third: string; fourth: string };
    cardBrandTypeState: string;
  }) =>
  (Story: any) => {
    return (
      <MemoryRouter initialEntries={[{ pathname: '/complete', state: initialState }]}>
        <Routes>
          <Route path="/complete" element={<Story />} />
        </Routes>
      </MemoryRouter>
    );
  };

const meta = {
  title: 'Pages/AddCardComplete',
  component: AddCardComplete,
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
} satisfies Meta<typeof AddCardComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withRouter({
      cardNumber: {
        first: '5134',
        second: '2312',
        third: '1232',
        fourth: '2353',
      },
      cardBrandTypeState: 'BC카드',
    }),
  ],
};

export const 국민카드: Story = {
  decorators: [
    withRouter({
      cardNumber: {
        first: '9876',
        second: '5432',
        third: '1098',
        fourth: '7654',
      },
      cardBrandTypeState: '국민카드',
    }),
  ],
};

export const 신한카드: Story = {
  decorators: [
    withRouter({
      cardNumber: {
        first: '1234',
        second: '5678',
        third: '9012',
        fourth: '3456',
      },
      cardBrandTypeState: '신한카드',
    }),
  ],
};
