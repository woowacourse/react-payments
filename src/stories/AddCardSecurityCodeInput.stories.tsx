import type { Meta, StoryObj } from '@storybook/react';

import AddCardSecurityCodeInput from '../pages/AddCard/components/AddCardSecurityCodeInput';
import { handleNumberInput } from '../utils/util';
import { securityCodeCondition } from '../pages/cardInputCondition';
import useInput from '../hooks/useInput';
import { APP_WIDTH } from './constants';

export default {
  title: 'AddCardSecurityCodeInput',
  component: AddCardSecurityCodeInput,
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
} as Meta<typeof AddCardSecurityCodeInput>;

type Story = StoryObj<typeof AddCardSecurityCodeInput>;

const AddHooks = () => {
  const securityCode = useInput('', securityCodeCondition, handleNumberInput);

  return <AddCardSecurityCodeInput securityCode={securityCode} />;
};

export const Primary: Story = {
  render: () => <AddHooks />,
};
