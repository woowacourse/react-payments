import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';
import CompanySelectField from '../../inputs/CompanySelectField/CompanySelectField';
import CvcField from '../../inputs/CvcField/CvcField';
import ExpiryField from '../../inputs/ExpiryField/ExpiryField';
import NumberField from '../../inputs/NumberField/NumberField';
import PasswordField from '../../inputs/PasswordField/PasswordField';
import type {CardRegisterInputProps} from '../../inputs/shared.types';

const createInputProps = (value: string, maxLength: number, placeholder: string): CardRegisterInputProps => ({
  value,
  maxLength,
  placeholder,
  onChange: fn(),
  onBlur: fn(),
});

const numberSlot = (
  <NumberField inputProps={[0, 1, 2, 3].map(() => createInputProps('', 4, '1234'))} errorMessage='' errorIndex={-1} />
);

const companySlot = <CompanySelectField selectedCompany={null} onChange={fn()} />;

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

const passwordSlot = <PasswordField inputProps={{...createInputProps('', 2, ''), type: 'password'}} errorMessage='' />;

const meta = {
  title: 'feature/CardRegister/components/sections/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    slots: [numberSlot],
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberOnly: Story = {};

export const WithCompanySelect: Story = {
  args: {
    slots: [companySlot, numberSlot],
  },
};

export const WithExpiry: Story = {
  args: {
    slots: [expirySlot, companySlot, numberSlot],
  },
};

export const FullVisible: Story = {
  args: {
    slots: [passwordSlot, cvcSlot, expirySlot, companySlot, numberSlot],
  },
};
