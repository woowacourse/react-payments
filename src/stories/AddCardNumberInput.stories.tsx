import type { Meta } from '@storybook/react';

import CardNumberInput from '../pages/AddCard/components/CardNumberInput';
import { APP_WIDTH } from '../utils/constants';
import { isValidCardNumber } from '../pages/AddCard/domain/validation';
import useInput from '../hooks/useInput';

export default {
  title: 'CardNumberInput',
  component: CardNumberInput,
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
} as Meta<typeof CardNumberInput>;

const AddHooks = () => {
  const cardFirstNumber = useInput(isValidCardNumber);
  const cardSecondNumber = useInput(isValidCardNumber);
  const cardThirdNumber = useInput(isValidCardNumber);
  const cardFourthNumber = useInput(isValidCardNumber);

  return (
    <CardNumberInput
      cardFirstNumber={cardFirstNumber}
      cardSecondNumber={cardSecondNumber}
      cardThirdNumber={cardThirdNumber}
      cardFourthNumber={cardFourthNumber}
    />
  );
};

export const Primary = {
  render: () => <AddHooks />,
};
