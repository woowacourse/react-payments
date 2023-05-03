/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Input from '../../components/common/Input/Input';
import InputContainer from '../../components/common/InputContainer/InputContainer';
import InputLabel from '../../components/common/Label/Label';

const meta = {
  title: 'Payments/Common/InputContainer',
  component: InputContainer,
  argTypes: {
    isError: {
      control: { type: 'boolean' },
    },
    supportingText: {
      control: { type: 'object' },
    },
    characterCounter: {
      control: { type: 'object' },
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
  args: {
    supportingText: { default: 'Supporting Text', error: 'Error Text' },
  },

  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
};

export const CharacterCounter: Story = {
  args: {
    characterCounter: { currentCount: 0, maxCount: 30 },
  },

  render: ({ isError, ...args }) => {
    const [value, setValue] = useState(0);
    const characterCounter = args.characterCounter!;
    const currCharacterCounter = { ...characterCounter, currentCount: value };

    return (
      <InputContainer characterCounter={currCharacterCounter} isError={isError}>
        <InputLabel htmlFor="input">Label</InputLabel>
        <Input
          id="input"
          placeholder="Placeholder Text"
          maxLength={characterCounter.maxCount}
          isError={isError}
          onChange={(event) => setValue(event.target.value.length)}
        />
      </InputContainer>
    );
  },
};

export const CharacterCounterInteraction: Story = {
  args: {
    characterCounter: { currentCount: 0, maxCount: 30 },
  },

  render: ({ isError, ...args }) => {
    const [value, setValue] = useState(0);
    const characterCounter = args.characterCounter!;
    const currCharacterCounter = { ...characterCounter, currentCount: value };

    return (
      <InputContainer characterCounter={currCharacterCounter} isError={isError}>
        <InputLabel htmlFor="input">Label</InputLabel>
        <Input
          id="input"
          placeholder="Placeholder Text"
          maxLength={characterCounter.maxCount}
          isError={isError}
          onChange={(event) => setValue(event.target.value.length)}
        />
      </InputContainer>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('Label');
    const input = canvas.getByPlaceholderText('Placeholder Text');
    expect(input).not.toHaveFocus();

    userEvent.click(label);

    expect(input).toHaveFocus();

    await userEvent.type(input, 'Hello, world!', { delay: 100 });
  },
};

export const Error: Story = {
  args: {
    isError: true,
  },

  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
};

export const UnderlineSupportingText: Story = {
  args: {
    supportingText: { default: 'Supporting Text', error: 'Error Text' },
  },

  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" variant="underline" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
};

export const UnderlineCharacterCounter: Story = {
  args: {
    characterCounter: { currentCount: 0, maxCount: 30 },
  },

  render: ({ isError, ...args }) => {
    const [value, setValue] = useState(0);
    const characterCounter = args.characterCounter!;
    const currCharacterCounter = { ...characterCounter, currentCount: value };

    return (
      <InputContainer characterCounter={currCharacterCounter} isError={isError}>
        <InputLabel htmlFor="input">Label</InputLabel>
        <Input
          id="input"
          variant="underline"
          placeholder="Placeholder Text"
          maxLength={characterCounter.maxCount}
          isError={isError}
          onChange={(event) => setValue(event.target.value.length)}
        />
      </InputContainer>
    );
  },
};

export const UnderlineCharacterCounterInteraction: Story = {
  args: {
    characterCounter: { currentCount: 0, maxCount: 30 },
  },

  render: ({ isError, ...args }) => {
    const [value, setValue] = useState(0);
    const characterCounter = args.characterCounter!;
    const currCharacterCounter = { ...characterCounter, currentCount: value };

    return (
      <InputContainer characterCounter={currCharacterCounter} isError={isError}>
        <InputLabel htmlFor="input">Label</InputLabel>
        <Input
          id="input"
          variant="underline"
          placeholder="Placeholder Text"
          maxLength={characterCounter.maxCount}
          isError={isError}
          onChange={(event) => setValue(event.target.value.length)}
        />
      </InputContainer>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('Label');
    const input = canvas.getByPlaceholderText('Placeholder Text');
    expect(input).not.toHaveFocus();

    userEvent.click(label);

    expect(input).toHaveFocus();

    await userEvent.type(input, 'Hello, world!', { delay: 100 });
  },
};

export const UnderlineError: Story = {
  args: {
    isError: true,
  },

  render: ({ isError, ...args }) => (
    <InputContainer isError={isError} {...args}>
      <InputLabel htmlFor="input">Label</InputLabel>
      <Input id="input" variant="underline" placeholder="Placeholder Text" isError={isError} />
    </InputContainer>
  ),
};
