import type { Meta, StoryObj } from '@storybook/react';

import AddCardPasswordInput from '../components/AddCardPasswordInput';
import { handleNumberInput } from '../utils/util';
import { cardPasswordCondition } from '../pages/cardInputCondition';
import useInput from '../hooks/useInput';
import { APP_WIDTH } from './constants';

export default {
  title: 'AddCardPasswordInput',
  component: AddCardPasswordInput,
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
} as Meta<typeof AddCardPasswordInput>;

type Story = StoryObj<typeof AddCardPasswordInput>;

const AddHooks = () => {
  const cardPassword1 = useInput('', cardPasswordCondition, handleNumberInput);
  const cardPassword2 = useInput('', cardPasswordCondition, handleNumberInput);

  return <AddCardPasswordInput cardPassword1={cardPassword1} cardPassword2={cardPassword2} />;
};

export const Primary: Story = {
  render: () => <AddHooks />,
};
