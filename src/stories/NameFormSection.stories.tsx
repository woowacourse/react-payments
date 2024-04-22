import type { Meta, StoryObj } from '@storybook/react';
import NameFormSection from '../components/NameFormSection/NameFormSection';

const meta = {
  title: 'NameFormSection',
  component: NameFormSection,
} satisfies Meta<typeof NameFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { changeName: () => { } },
};
