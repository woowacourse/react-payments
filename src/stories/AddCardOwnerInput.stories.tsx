import type { Meta, StoryObj } from '@storybook/react';

import AddCardOwnerInput from '../pages/AddCard/components/AddCardOwnerInput';
import { stringToUpperCase } from '../utils/util';
import { cardOwnerCondition } from '../pages/cardInputCondition';
import useInput from '../hooks/useInput';
import { APP_WIDTH } from './constants';

export default {
  title: 'AddCardOwnerInput',
  component: AddCardOwnerInput,
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
} as Meta<typeof AddCardOwnerInput>;

type Story = StoryObj<typeof AddCardOwnerInput>;

const AddHooks = () => {
  const cardOwner = useInput('', cardOwnerCondition, stringToUpperCase);

  return <AddCardOwnerInput cardOwner={cardOwner} />;
};

export const Primary: Story = {
  render: () => <AddHooks />,
};
