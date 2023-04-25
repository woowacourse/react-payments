import type { Meta } from '@storybook/react';

import AddCardExpireDateInput from '../components/AddCardExpireDateInput';
import useInput from '../hooks/useInput';
import { cardExpireCondition } from '../pages/cardInputCondition';
import { formatExpireDate } from '../utils/util';

export default {
  title: 'AddCardExpireDateInput',
  component: AddCardExpireDateInput,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '210px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof AddCardExpireDateInput>;

const AddInputHooks = () => {
  const cardExpireDate = useInput('', cardExpireCondition, formatExpireDate);

  return <AddCardExpireDateInput cardExpire={cardExpireDate} />;
};

export const Primary = {
  render: () => <AddInputHooks />,
};
