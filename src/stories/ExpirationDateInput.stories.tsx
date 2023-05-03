import type { Meta, StoryObj } from '@storybook/react';
import ExpirationDateInput from 'pages/RegisterPage/FormInputs/ExpirationDateInput';

const ExpirationDateInputMeta = {
  component: ExpirationDateInput,
  title: '/FormInput/ExpirationDateInput Component',
} satisfies Meta<typeof ExpirationDateInput>;

export default ExpirationDateInputMeta;

type Story = StoryObj<typeof ExpirationDateInputMeta>;

export const Primary: Story = {
  args: {
    date: {
      month: '',
      year: '',
    },

    setDate: () => {},
  },
};
