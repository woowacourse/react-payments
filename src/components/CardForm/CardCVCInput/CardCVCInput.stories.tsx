import type { Meta, StoryObj } from '@storybook/react';

import CardCVCInput from './CardCVCInput';
import { validateCVC } from '../../../domain/Card';
import useInput from '../../../hooks/useInput';

const meta = {
  title: 'component/CardCVCInput',
  component: CardCVCInput,
  parameters: {
    controls: { exclude: ['cvc', 'handleIsCVCInput'] },
  },
  decorators: [
    () => {
      const cvc = useInput(validateCVC);
      return <CardCVCInput cvc={cvc} handleIsCVCInput={() => {}} />;
    },
  ],
} satisfies Meta<typeof CardCVCInput>;

export default meta;

type Story = StoryObj<typeof CardCVCInput>;

export const Default: Story = {};
