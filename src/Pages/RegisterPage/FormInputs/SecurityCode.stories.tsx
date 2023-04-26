import type { Meta, StoryObj } from '@storybook/react';
import SecurityCodeInput from './SecurityCodeInput';

const SecurityCodeInputMeta = {
  component: SecurityCodeInput,
  title: 'SecurityCodeInput Component',
} satisfies Meta<typeof SecurityCodeInput>;

export default SecurityCodeInputMeta;

type Story = StoryObj<typeof SecurityCodeInputMeta>;

export const Primary: Story = {
  args: {
    code: {
      code: '',
    },

    setCode: () => {},
  },
};
