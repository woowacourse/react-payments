import type { Meta, StoryObj } from '@storybook/react';

import SecurityCodeInput from '../pages/AddCard/components/SecurityCodeInput';
import useInput from '../hooks/useInput';
import { APP_WIDTH } from '../utils/constants';
import { isValidSecurityCode } from '../pages/AddCard/domain/dispatcher';

export default {
  title: 'AddCardSecurityCodeInput',
  component: SecurityCodeInput,
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
} as Meta<typeof SecurityCodeInput>;

type Story = StoryObj<typeof SecurityCodeInput>;

const AddHooks = () => {
  const securityCode = useInput(isValidSecurityCode);

  return <SecurityCodeInput securityCode={securityCode} />;
};

export const Primary: Story = {
  render: () => <AddHooks />,
};
