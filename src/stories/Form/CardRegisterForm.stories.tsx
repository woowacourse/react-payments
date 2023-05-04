import type { Meta, StoryObj } from '@storybook/react';
import { CardRegisterForm } from '../../components/Form/CardRegisterForm';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof CardRegisterForm> = {
  title: 'Example/Form',
  component: CardRegisterForm,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CardRegisterForm>;

export default meta;
type Story = StoryObj<typeof CardRegisterForm>;

export const RegisterNewCardForm: Story = {
  render: () => {
    return <CardRegisterForm />;
  },
};
