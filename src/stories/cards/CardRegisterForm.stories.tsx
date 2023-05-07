import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import CardRegisterForm from '../../components/CardRegisterForm';
import { ModalProvider } from '../../utils/context/ModalContext';

const meta: Meta<typeof CardRegisterForm> = {
  title: 'components/cards/CardRegisterForm',
  component: CardRegisterForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CardRegisterForm>;

const Template: Story = {
  render: () => {
    return (
      <div style={{ width: '318px' }}>
        <CardRegisterForm />
      </div>
    );
  },
};

export const Default: Story = {
  ...Template,
};
