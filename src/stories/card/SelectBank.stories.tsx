import { Meta, StoryObj } from '@storybook/react';
import SelectBank from '../../components/card/SelectBank';

const meta: Meta<typeof SelectBank> = {
  component: SelectBank,
  title: 'SelectBank',
};

export default meta;
type Story = StoryObj<typeof SelectBank>;

export const Default: Story = {
  args: {
    onBankSelectClick: () => {},
  },
};
