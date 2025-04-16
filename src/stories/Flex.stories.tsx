import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/components/common/Flex';

const meta = {
  title: 'common/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    height: '50px',
    children: 'Flex 컴포넌트 입니다.',
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    justifyContent: {
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    margin: {
      control: false,
    },
    padding: {
      control: false,
    },
    width: {
      control: false,
    },
    height: {
      control: false,
    },
    gap: {
      control: { type: 'text' },
    },
    children: {
      control: false,
    },
  },
  render: (args) => {
    return (
      <Flex
        {...args}
        css={css`
          border: 1px solid black;
        `}
      >
        <Flex
          css={css`
            background-color: red;
            width: 32px;
            height: 32px;
          `}
        >
          1
        </Flex>
        <Flex
          css={css`
            background-color: green;
            width: 32px;
            height: 32px;
          `}
        >
          2
        </Flex>
        <Flex
          css={css`
            background-color: blue;
            width: 32px;
            height: 32px;
          `}
        >
          3
        </Flex>
      </Flex>
    );
  },
};
