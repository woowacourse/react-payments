import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';
import BrandSelectField from '../fields/BrandSelectField';
import CvcField from '../fields/CvcField';
import ExpiryField from '../fields/ExpiryField';
import NumberField from '../fields/NumberField';
import PasswordField from '../fields/PasswordField';
import type {CardRegisterInputProps} from '@/feature/CardRegister/types/cardRegisterInputProps';

const createInputProps = (
  value: string,
  maxLength: number,
  placeholder: string
): CardRegisterInputProps => ({
  value,
  maxLength,
  placeholder,
  onChange: fn(),
  onBlur: fn(),
});

const numberSlot = (
  <NumberField
    inputProps={[0, 1, 2, 3].map(() => createInputProps('', 4, '1234'))}
    errorMessage=''
    errorIndex={-1}
  />
);

const brandSlot = <BrandSelectField selectedCompany={null} onChange={fn()} />;

const expirySlot = (
  <ExpiryField
    inputProps={{
      month: createInputProps('', 2, 'MM'),
      year: createInputProps('', 2, 'YY'),
    }}
    errorMessage=''
    errorIndex={-1}
  />
);

const cvcSlot = <CvcField inputProps={createInputProps('', 3, '123')} errorMessage='' />;

const passwordSlot = (
  <PasswordField
    inputProps={{...createInputProps('', 2, ''), type: 'password'}}
    errorMessage=''
  />
);

const meta = {
  title: 'feature/CardRegister/components/sections/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    numberSlot,
    brandSlot: null,
    expirySlot: null,
    cvcSlot: null,
    passwordSlot: null,
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberOnly: Story = {};

export const WithCompanySelect: Story = {
  args: {
    brandSlot,
  },
};

export const WithExpiry: Story = {
  args: {
    brandSlot,
    expirySlot,
  },
};

export const FullVisible: Story = {
  args: {
    brandSlot,
    expirySlot,
    cvcSlot,
    passwordSlot,
  },
};
