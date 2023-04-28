import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SupportingTextMessage } from '../../types';
import InputContainer from '../../components/common/InputContainer/InputContainer';
import InputLabel from '../../components/common/Label/Label';
import Input from '../../components/common/Input/Input';

interface InputContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  supportingText?: SupportingTextMessage;
  characterCounter?: {
    currentCount: number;
    maxCount: number;
  };
  isError?: boolean;
}

const meta = {
  title: 'Payments/Common/InputContainer',
  component: InputContainer,
  tags: ['autodocs'],
  argTypes: {
    isError: {
      control: { type: 'boolean' },
    },
    supportingText: {
      control: { type: 'object' },
    },
    characterCounter: {
      control: { type: 'object' },
      defaultValue: {
        characterCounter: {
          currentCount: 0,
          maxCount: 20,
        },
      },
    },
  },
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {
  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
};

export const Required: Story = {
  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input" required>
        Label
      </InputLabel>
      <Input id="input" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
};

export const SupportingText: Story = {
  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
  args: {
    supportingText: { default: 'Supporting Text', error: 'Error Text' },
  },
};

export const CharacterCounter = (args: InputContainerProps) => {
  const [value, setValue] = useState(0);
  const characterCounter = args.characterCounter!;
  const currCharacterCounter = { ...characterCounter, currentCount: value };

  return (
    <InputContainer characterCounter={currCharacterCounter} isError={args.isError}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input
        id="input"
        placeholder="Placeholder Text"
        maxLength={30}
        isError={args.isError}
        onChange={(event) => setValue(event.target.value.length)}
      />
    </InputContainer>
  );
};

CharacterCounter.args = {
  characterCounter: { currentCount: 0, maxCount: 30 },
};

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

  await userEvent.type(input, 'Hello, world!', { delay: 100 });
};

export const Error: Story = {
  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
  args: {
    isError: true,
  },
};

export const UnderlineSupportingText: Story = {
  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" variant="underline" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
  args: {
    supportingText: { default: 'Supporting Text', error: 'Error Text' },
  },
};

export const UnderlineCharacterCounter = (args: InputContainerProps) => {
  const [value, setValue] = useState(0);
  const characterCounter = args.characterCounter!;
  const currCharacterCounter = { ...characterCounter, currentCount: value };

  return (
    <InputContainer characterCounter={currCharacterCounter} isError={args.isError}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input
        id="input"
        variant="underline"
        placeholder="Placeholder Text"
        isError={args.isError}
        maxLength={30}
        onChange={(event) => setValue(event.target.value.length)}
      />
    </InputContainer>
  );
};

UnderlineCharacterCounter.args = {
  characterCounter: { currentCount: 0, maxCount: 30 },
};

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

  await userEvent.type(input, 'Hello, world!', { delay: 100 });
};

export const UnderlineError: Story = {
  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" variant="underline" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
  args: {
    isError: true,
  },
};
