import type { Meta, StoryObj } from '@storybook/react';

import CardOwnerInput from './CardOwnerInput';
import { validateOwner } from '../../../domain/Card';
import useInput from '../../../hooks/useInput';

const meta = {
  title: 'component/CardOwnerInput',
  component: CardOwnerInput,
  parameters: {
    controls: { exclude: 'owner' },
  },
  decorators: [
    () => {
      const owner = useInput<string>(validateOwner, '');
      return <CardOwnerInput owner={owner} />;
    },
  ],
} satisfies Meta<typeof CardOwnerInput>;

export default meta;

type Story = StoryObj<typeof CardOwnerInput>;

export const Default: Story = {};
