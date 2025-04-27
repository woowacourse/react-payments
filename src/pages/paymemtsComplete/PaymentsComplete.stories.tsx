import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PaymentsComplete from './PaymentsComplete';

const meta = {
  title: 'PaymentsComplete',
  component: PaymentsComplete,
} satisfies Meta<typeof PaymentsComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/payments/complete',
            state: {
              cardNumber: '1234',
              cardIssuer: 'shinhanCard', // 여기 Mock 데이터로 전달
            },
          } as any, // 타입 에러 방지를 위해 as any
        ]}
      >
        <Routes>
          <Route path="/payments/complete" element={<PaymentsComplete />} />
        </Routes>
      </MemoryRouter>
    );
  },
};
