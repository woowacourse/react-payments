import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import CvcField from './CvCField';
import {useCvcNumber} from '../../../hooks/useCvcNumber';

const mockCvcField = (cvcNumber = '') => ({
  cvcNumber,
  isComplete: cvcNumber.length === 3,
  hasAnyErr: false,
  firstErrIdx: -1,
  errMsg: '',
  handleChange: fn(),
  handleBlur: fn(),
});

const meta = {
  title: 'feature/CardRegister/components/CvcField',
  component: CvcField,
  tags: ['autodocs'],
  args: mockCvcField(),
} satisfies Meta<typeof CvcField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: mockCvcField('123'),
};

export const Interactive: Story = {
  render: function InteractiveCvcField() {
    const cvcField = useCvcNumber();
    return <CvcField {...cvcField} />;
  },
};
