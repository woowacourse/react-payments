import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyles from '../../GlobalStyles';
import RegistrationConfirm from '../../pages/RegistrationConfirm/RegistrationConfirm';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'pages/RegistrationConfirm',
  component: RegistrationConfirm,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyles />
          <MemoryRouter
            initialEntries={[
              { pathname: '/confirm', state: { cardNumber: '1234', cardCompany: '국민카드' } },
            ]}
          >
            <Story />
          </MemoryRouter>
        </>
      );
    },
  ],
} satisfies Meta<typeof RegistrationConfirm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
