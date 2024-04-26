import type { Meta, StoryObj } from '@storybook/react';

import CardPasswordInput from './CardPasswordInput';
import { validatePassword } from '../../../domain/Card';
import useInput from '../../../hooks/useInput';

const meta = {
  title: 'CardPasswordInput',
  component: CardPasswordInput,
  parameters: {
    controls: { exclude: 'password' },
  },
  decorators: [
    () => {
      const password = useInput(validatePassword);
      return <CardPasswordInput password={password} />;
    },
  ],
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof CardPasswordInput>;

export const Default: Story = {};
