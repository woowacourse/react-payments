import type { Meta } from '@storybook/react';

import ExpireDateInput from '../pages/AddCard/components/ExpireDateInput';
import { APP_WIDTH } from '../utils/constants';
import useInput from '../hooks/useInput';
import {
  isValidExpiredMonthFormat,
  isValidExpiredYearFormat,
} from '../pages/AddCard/domain/dispatcher';

export default {
  title: 'AddCardExpireDateInput',
  component: ExpireDateInput,
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
} as Meta<typeof ExpireDateInput>;

const AddHook = () => {
  const expireMonth = useInput(isValidExpiredMonthFormat);
  const expireYear = useInput(isValidExpiredYearFormat);

  const props = { expireMonth, expireYear };
  return <ExpireDateInput {...props} />;
};
export const Primary = {
  render: () => <AddHook />,
};
