import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: '다음',
  },
};

export const Disable: Story = {
  args: {
    isDisable: true,
    text: '다음',
  },
};

const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

const BigSvg = styled.svg`
  height: 24px;
`;

export const Prev: Story = {
  args: {
    icon: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </Svg>
    ),
    iconPosition: 'left',
    text: '',
  },
};

export const Change: Story = {
  args: {
    icon: (
      <BigSvg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </BigSvg>
    ),
    type: 'button',
    iconPosition: 'left',
    text: '카드 변경하기',
    backgroundColor: 'yellow',
    padding: '8px',
    borderRadius: '8px',
  },
};
