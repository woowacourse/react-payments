import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectCardCompanyField from '../components/SelectCardCompanyField';

const meta = {
  title: 'SelectCardCompanyField',
  component: SelectCardCompanyField,
} satisfies Meta<typeof SelectCardCompanyField>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockHandlSelect = action('handleSelect');
const mockHandleNext = action('handleNext');
const mockHandleComplete = action('handleComplete');

export const Default: Story = {
  args: {
    handleSelect: mockHandlSelect,
    handleNext: mockHandleNext,
    handleComplete: mockHandleComplete,
  },
};
