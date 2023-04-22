import type { Meta } from '@storybook/react';
import InputContainer from '../../components/common/InputContainer/InputContainer';
import Input from '../../components/common/Input/Input';

const meta = {
  title: 'Payments/Common/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof InputContainer>;

export default meta;

export const Default = () => (
  <InputContainer label="Label Text" id="id">
    <Input />
  </InputContainer>
);

export const Required = () => (
  <InputContainer label="Label Text" id="id" required>
    <Input />
  </InputContainer>
);

export const SupportingText = () => (
  <InputContainer label="Label Text" id="id" supportingText="Supporting Text">
    <Input />
  </InputContainer>
);

export const ErrorSupportingText = () => (
  <InputContainer label="Label Text" id="id" supportingText="Error Supporting Text" isError>
    <Input />
  </InputContainer>
);

export const CharacterCounter = () => (
  <InputContainer label="Label Text" id="id" characterCounter={[0, 30]}>
    <Input />
  </InputContainer>
);
