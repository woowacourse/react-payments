import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/components/common/Flex';

const meta = {
  title: 'common/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flex 컴포넌트는 Flexbox 레이아웃을 구현하기 위한 컴포넌트입니다. 다양한 방향과 정렬 옵션을 지원합니다.',
      },
    },
  },
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
        'center',
        'initial',
        'inherit',
      ],
    },
    alignItems: {
      control: { type: 'select' },
      options: [
        'normal',
        'flex-start',
        'flex-end',
        'start',
        'center',
        'end',
        'baseline',
        'stretch',
        'initial',
        'inherit',
      ],
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
      control: false,
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
          flex={0.1}
          css={css`
            background-color: red;
            width: 32px;
            height: 32px;
          `}
        >
          1
        </Flex>
        <Flex
          flex={0.1}
          css={css`
            background-color: green;
            width: 32px;
            height: 32px;
          `}
        >
          2
        </Flex>
        <Flex
          flex={0.1}
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
