import type { Meta, StoryObj } from '@storybook/react';

import CardNumberInput from './CardNumberInput';
import { validateCardNumber } from '../../../domain/Card';
import useInputs from '../../../hooks/useInputs';

const meta = {
  title: 'component/CardNumberInput',
  component: CardNumberInput,
  parameters: {
    controls: { exclude: 'cardNumbers' },
  },
  decorators: [
    () => {
      const cardNumbers = useInputs(validateCardNumber, ['', '', '', '']);
      return <CardNumberInput cardNumbers={cardNumbers} />;
    },
  ],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {};
