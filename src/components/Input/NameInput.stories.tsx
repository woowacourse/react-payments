import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NameInput, NameInputProps } from './NameInput';

const meta = {
  tags: ['autodocs'],
  title: 'NameInput',
  component: NameInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof NameInput>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = (args) => {
  const [value, setValue] = useState<NameInputProps['value']>('');

  const handleNameInputChange: NameInputProps['onChange'] = (inputValue) => {
    setValue(inputValue);
  };

  return <NameInput {...args} value={value} onChange={handleNameInputChange}></NameInput>;
};
