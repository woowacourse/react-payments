import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import BrandSelectField from './BrandSelectField';

const meta = {
  title: 'feature/CardRegister/components/BrandSelectField',
  component: BrandSelectField,
  tags: ['autodocs'],
  args: {
    selectedCompany: null,
    onChange: fn(),
  },
} satisfies Meta<typeof BrandSelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selectedCompany: 'shinhan',
  },
};
