import { Meta, StoryObj } from '@storybook/react';

import Button from './Button.style';
import GlobalStyle from '../../../styles/globalStyle';

const meta = {
  component: Button,
  title: 'Button Component',
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const small_primary = {
  args: {
    primary: true,
    size: 'small',
    children: '더보기',
    width: 'full',
  },
} satisfies Story;

export const large_non_primary = {
  args: {
    primary: false,
    size: 'large',
    children: '더보기',
  },
} satisfies Story;

export const large_non_disabled_primary = {
  args: {
    primary: false,
    size: 'large',
    disabled: true,
    children: '더보기',
  },
} satisfies Story;
