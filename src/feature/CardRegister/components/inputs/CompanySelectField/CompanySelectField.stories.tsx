import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import CompanySelectField from './CompanySelectField';

const meta = {
  title: 'feature/CardRegister/components/inputs/CompanySelectField',
  component: CompanySelectField,
  tags: ['autodocs'],
  args: {
    selectedCompany: null,
    onChange: fn(),
  },
} satisfies Meta<typeof CompanySelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selectedCompany: 'shinhan',
  },
};
