import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useState } from 'react';
import BaseInputField from './BaseInputField';
import Input from '../Input/Input';

const meta: Meta<typeof BaseInputField> = {
  title: 'components/BaseInputField',
  component: BaseInputField,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BaseInputField>;

export const Default: Story = {
  args: {
    label: 'BaseInputField',
    errorMessage: '',
  },
  render: function Render(args) {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      if (args.errorMessage !== undefined)
        setIsError(args.errorMessage.length ? true : false);
    }, [args.errorMessage]);

    return (
      <BaseInputField
        {...args}
        children={
          <Input
            placeholder="1234"
            isError={isError}
            value=""
            name="inputName"
            type="text"
            onChange={() => {}}
          />
        }
      />
    );
  },
};

export const Error: Story = {
  args: {
    label: 'BaseInputField',
    errorMessage: 'errorMessage',
  },
  render: function Render(args) {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      if (args.errorMessage !== undefined)
        setIsError(args.errorMessage.length ? true : false);
    }, [args.errorMessage]);

    return (
      <BaseInputField
        {...args}
        children={
          <Input
            placeholder="1234"
            isError={isError}
            value=""
            name="inputName"
            type="text"
            onChange={() => {}}
          />
        }
      />
    );
  },
};
