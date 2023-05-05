import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

const Container = styled.div`
  padding: 96px;
`;

const meta = {
  title: 'common/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: 'top',
    content: '툴팁입니다',
  },
  render: (args) => {
    return (
      <Container>
        <Tooltip {...args}>
          <Button>버튼</Button>
        </Tooltip>
      </Container>
    );
  },
};
