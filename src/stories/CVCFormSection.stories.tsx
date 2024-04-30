import type { Meta, StoryObj } from '@storybook/react';
import CVCFormSection from '../components/CVCFormSection';

const meta = {
  title: 'CVCFormSection',
  component: CVCFormSection,
} satisfies Meta<typeof CVCFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { changeCVC: () => {}, changeIsValid: () => {} },
};
