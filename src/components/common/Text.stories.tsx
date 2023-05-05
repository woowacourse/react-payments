import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Text } from './Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const meta = {
  title: 'common/Text',
  component: Text,
  decorators: [
    (Story) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSizes: Story = {
  args: {
    children: '다람쥐 헌 쳇바퀴 돌듯이',
  },
  render: ({ children, ...args }) => {
    return (
      <>
        <Text {...args} size="small">
          {children} (small)
        </Text>
        <Text {...args} size="medium">
          {children} (medium)
        </Text>
        <Text {...args} size="large">
          {children} (large)
        </Text>
        <Text {...args} size="xlarge">
          {children} (xlarge)
        </Text>
        <Text {...args} size="xxlarge">
          {children} (xxlarge)
        </Text>
      </>
    );
  },
};

export const WithWeights: Story = {
  args: {
    children: '다람쥐 헌 쳇바퀴 돌듯이',
  },
  render: ({ children, ...args }) => {
    return (
      <>
        <Text {...args} weight="normal">
          {children} (normal)
        </Text>
        <Text {...args} weight="bold">
          {children} (bold)
        </Text>
      </>
    );
  },
};

export const WithColors: Story = {
  args: {
    children: '다람쥐 헌 쳇바퀴 돌듯이',
  },
  render: ({ children, ...args }) => {
    return (
      <>
        <Text {...args} color="primary">
          {children} (primary)
        </Text>
        <Text {...args} color="secondary">
          {children} (secondary)
        </Text>
        <Text {...args} color="warning">
          {children} (warning)
        </Text>
      </>
    );
  },
};
