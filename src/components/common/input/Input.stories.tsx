import { Meta, StoryObj } from '@storybook/react';

import Input from './Input.style';
import GlobalStyle from '../../../styles/globalStyle';

const meta = {
  component: Input,
  title: 'Input Component',
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 카드번호_뒷자리 = {
  args: {
    primary: true,
    type: 'password',
    maxLength: 4,
    size: 'small',
    inputMode: 'numeric',
    placeholder: '●●●●',
  },
} satisfies Story;

export const 소유자_이름 = {
  args: {
    primary: false,
    type: 'text',
    maxLength: 30,
    size: 'large',
    width: 'full',
    textAlign: 'left',
  },
} satisfies Story;
