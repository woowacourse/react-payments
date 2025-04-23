import { Meta, StoryObj } from '@storybook/react';
import CardSelectBox from './CardSelectBox';

const meta = {
  title: 'CardSelectBox',
  component: CardSelectBox,
} satisfies Meta<typeof CardSelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelectCardCompany: () => alert('변경'),
  },
};
