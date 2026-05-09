import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import SelectCardBrandField from '../../../../../feature/CardRegister/components/InfoInputSection/SelectCardBrandField';

const meta = {
  title: 'feature/CardRegister/components/SelectCardBrandField',
  component: SelectCardBrandField,
  tags: ['autodocs'],
  args: {
    handleCardCompanyChange: fn(),
  },
} satisfies Meta<typeof SelectCardBrandField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
