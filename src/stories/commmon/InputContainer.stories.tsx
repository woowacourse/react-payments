import type { Meta } from '@storybook/react';
import InputContainer from '../../components/common/InputContainer/InputContainer';
import InputLabel from '../../components/common/Label/Label';
import Input from '../../components/common/Input/Input';

const meta = {
  title: 'Payments/Common/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof InputContainer>;

export default meta;

export const Default = () => (
  <InputContainer>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" placeholder="Placeholder Text" />
  </InputContainer>
);

export const Required = () => (
  <InputContainer>
    <InputLabel htmlFor="input" required>
      Label
    </InputLabel>
    <Input id="input" placeholder="Placeholder Text" />
  </InputContainer>
);

export const SupportingText = () => (
  <InputContainer supportingText={{ default: 'Supporting Text' }}>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" placeholder="Placeholder Text" />
  </InputContainer>
);

export const CharacterCounter = () => (
  <InputContainer characterCounter={{ currentCount: 0, maxCount: 30 }}>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" placeholder="Placeholder Text" />
  </InputContainer>
);

export const Error = () => (
  <InputContainer isError>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" placeholder="Placeholder Text" isError />
  </InputContainer>
);

export const UnderlineSupportingText = () => (
  <InputContainer supportingText={{ default: 'Supporting Text' }}>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" variant="underline" placeholder="Placeholder Text" />
  </InputContainer>
);

export const UnderlineCharacterCounter = () => (
  <InputContainer characterCounter={{ currentCount: 0, maxCount: 30 }}>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" variant="underline" placeholder="Placeholder Text" />
  </InputContainer>
);

export const UnderlineError = () => (
  <InputContainer isError>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" variant="underline" placeholder="Placeholder Text" isError />
  </InputContainer>
);
