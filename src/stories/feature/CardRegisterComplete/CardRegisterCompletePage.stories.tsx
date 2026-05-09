import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';

import CardRegisterCompletePage from '../../../feature/CardRegisterComplete/CardRegisterCompletePage';

const meta = {
  title: 'feature/CardRegisterComplete/CardRegisterCompletePage',
  component: CardRegisterCompletePage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/complete',
            state: {
              cardNumbers: ['5511', '1234', '5678', '9012'],
              expiryMonth: '12',
              expiryYear: '30',
              cvcNumber: '123',
              cardCompanyId: 'bc',
              password: '12',
            },
          },
        ]}
      >
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardRegisterCompletePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
