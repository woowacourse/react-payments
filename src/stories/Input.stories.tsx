import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';
import { css } from '@emotion/react';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const inputStyle = ({ borderColor, focusColor }: { borderColor: string; focusColor: string }) =>
  css({
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    padding: '8px',
    fontSize: '11px',
    outline: 'none',
    width: '100%',

    '&:active, &:focus': {
      borderColor: `${focusColor}`,
    },

    '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: '0',
    },
  });

export const Default: Story = {
  args: {
    inputCss: inputStyle({
      borderColor: '#acacac',
      focusColor: '#000',
    }),
    type: 'number',
    placeholder: '1234',
    onStateChange: () => {},
    maxLength: 4,
  },
};

export const Error: Story = {
  args: {
    inputCss: inputStyle({
      borderColor: '#FF3D3D',
      focusColor: '#FF3D3D',
    }),
    type: 'number',
    placeholder: '1234',
    onStateChange: () => {},
    maxLength: 4,
  },
};
