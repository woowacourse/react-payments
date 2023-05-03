import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from 'pages/RegisterPage/FormInputs/PasswordInput';

const PassWordInputMeta = {
  component: PasswordInput,
  title: '/FormInput/PasswordInput Component',
} satisfies Meta<typeof PasswordInput>;

export default PassWordInputMeta;

type Story = StoryObj<typeof PassWordInputMeta>;

export const Primary: Story = {
  args: {
    password: {
      password1: '',
      password2: '',
    },

    setPassword: () => {},
  },
};
