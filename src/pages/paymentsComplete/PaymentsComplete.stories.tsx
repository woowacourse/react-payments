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
              cardIssuer: 'shinhanCard',
            },
          } as any,
        ]}
      >
        <Routes>
          <Route path="/payments/complete" element={<PaymentsComplete />} />
        </Routes>
      </MemoryRouter>
    );
  },
};
