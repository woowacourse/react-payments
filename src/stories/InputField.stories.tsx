import { fn } from '@storybook/test';
import InputField from '../components/common/InputField/InputField';

export default {
  component: InputField,
  title: 'InputField',
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    onChange: fn(),
  },
};

export const Basic = {
  args: {
    value: 111,
    isError: false,
  },
};

export const Error = {
  args: {
    value: 111,
    isError: true,
  },
};
