import type { Meta } from '@storybook/react';
import type { CardNumber, InputHook } from '../type';

import AddCardNumberInput from '../components/AddCardNumberInput';
import usePasswordInput from '../hooks/usePasswordInput';
import { isNumberInput } from '../utils/util';

const meta: Meta<typeof AddCardNumberInput> = {
  title: 'AddCardNumberInput',
  component: AddCardNumberInput,
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
};

export default meta;

const AddHooks = () => {
  const [cardNumber, onChangeCardNumber] = usePasswordInput<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const cardNumberProps: InputHook<CardNumber> = {
    value: cardNumber,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 4) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;

      onChangeCardNumber(e);
    },
  };

  return <AddCardNumberInput cardNumber={cardNumberProps} />;
};

export const Primary = {
  render: () => <AddHooks />,
};
