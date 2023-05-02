import type { Meta, StoryObj } from '@storybook/react';

import PasswordInput from '../pages/AddCard/components/PasswordInput';
import useInput from '../hooks/useInput';
import { APP_WIDTH } from '../utils/constants';
import { isValidPassword } from '../pages/AddCard/domain/validation';

export default {
  title: 'AddCardPasswordInput',
  component: PasswordInput,
  decorators: [
    (Story) => (
      <div
        style={{
          width: APP_WIDTH,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

const AddHooks = () => {
  const cardPassword1 = useInput(isValidPassword);
  const cardPassword2 = useInput(isValidPassword);

  return <PasswordInput cardPassword1={cardPassword1} cardPassword2={cardPassword2} />;
};

export const Primary: Story = {
  render: () => <AddHooks />,
};
