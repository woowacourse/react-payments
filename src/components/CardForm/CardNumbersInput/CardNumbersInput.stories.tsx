import type { Meta, StoryObj } from '@storybook/react';

import CardNumbersInput from './CardNumbersInput';
import { validateCardNumber } from '../../../domain/Card';
import useInputs from '../../../hooks/useInputs';

const meta = {
  title: 'component/CardNumbersInput',
  component: CardNumbersInput,
  parameters: {
    controls: { exclude: 'cardNumbers' },
  },
  decorators: [
    () => {
      const cardNumbers = useInputs<string>(validateCardNumber, ['', '', '', '']);
      return <CardNumbersInput cardNumbers={cardNumbers} />;
    },
  ],
} satisfies Meta<typeof CardNumbersInput>;

export default meta;

type Story = StoryObj<typeof CardNumbersInput>;

export const Default: Story = {};
