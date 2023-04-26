import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

export const CharacterCounterInteraction = () => {
  const [value, setValue] = useState('');

  return (
    <InputContainer characterCounter={{ currentCount: value.length, maxCount: 50 }}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input
        id="input"
        value={value}
        placeholder="Placeholder Text"
        onChange={(event) => setValue(event.target.value)}
      />
    </InputContainer>
  );
};

CharacterCounterInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const label = canvas.getByText('Label');
  const input = canvas.getByPlaceholderText('Placeholder Text');

  expect(input).not.toHaveFocus();

  userEvent.click(label);

  expect(input).toHaveFocus();

  await userEvent.type(input, 'Whereas recognition of the inherent dignity', { delay: 100 });
};

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

export const UnderlineCharacterCounterInteraction = () => {
  const [value, setValue] = useState('');

  return (
    <InputContainer characterCounter={{ currentCount: value.length, maxCount: 50 }}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input
        id="input"
        variant="underline"
        value={value}
        placeholder="Placeholder Text"
        onChange={(event) => setValue(event.target.value)}
      />
    </InputContainer>
  );
};

UnderlineCharacterCounterInteraction.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const label = canvas.getByText('Label');
  const input = canvas.getByPlaceholderText('Placeholder Text');

  expect(input).not.toHaveFocus();

  userEvent.click(label);

  expect(input).toHaveFocus();

  await userEvent.type(input, 'Whereas recognition of the inherent dignity', { delay: 100 });
};

export const UnderlineError = () => (
  <InputContainer isError>
    <InputLabel htmlFor="input">Label</InputLabel>
    <Input id="input" variant="underline" placeholder="Placeholder Text" isError />
  </InputContainer>
);
