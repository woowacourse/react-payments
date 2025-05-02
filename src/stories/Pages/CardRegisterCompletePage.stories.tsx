import { Meta, StoryObj } from '@storybook/react';
import CardRegisterCompletePage from '../../pages/card-register-complete/CardRegisterCompletePage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const meta = {
  title: 'Pages/CardRegisterCompletePage',
  component: CardRegisterCompletePage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '카드 등록 완료 페이지입니다. 등록된 카드의 일부 정보(브랜드, 번호 앞자리)를 보여주고 확인 버튼을 제공합니다.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/card-register-complete',
            state: { cardFirstPartNumbers: '1234', cardBrandName: '우리카드' },
          },
        ]}
      >
        <Routes>
          <Route path='/card-register-complete' element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardRegisterCompletePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CardRegisterCompletePage />,
};
