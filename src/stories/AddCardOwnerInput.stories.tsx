import type { Meta, StoryObj } from '@storybook/react';

import OwnerInput from '../pages/AddCard/components/OwnerInput';
import useInput from '../hooks/useInput';
import { APP_WIDTH } from '../utils/constants';
import { isValidOwnerName } from '../pages/AddCard/domain/validation';

export default {
  title: 'AddCardOwnerInput',
  component: OwnerInput,
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
} as Meta<typeof OwnerInput>;

type Story = StoryObj<typeof OwnerInput>;

const AddHooks = () => {
  const cardOwner = useInput(isValidOwnerName);

  return <OwnerInput cardOwner={cardOwner} />;
};

export const Primary: Story = {
  render: () => <AddHooks />,
};
