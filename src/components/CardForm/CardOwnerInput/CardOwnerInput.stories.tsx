import type { Meta, StoryObj } from '@storybook/react';

import CardOwnerInput from './CardOwnerInput';
import { validateOwner } from '../../../domain/Card';
import useInput from '../../../hooks/useInput';

const meta = {
  title: 'CardOwnerInput',
  component: CardOwnerInput,
  parameters: {
    controls: { exclude: 'owner' },
  },
  decorators: [
    () => {
      const owner = useInput(validateOwner);
      return <CardOwnerInput owner={owner} />;
    },
  ],
} satisfies Meta<typeof CardOwnerInput>;

export default meta;

type Story = StoryObj<typeof CardOwnerInput>;

export const Default: Story = {};
