import type { StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import EmptyList from './EmptyList';

export default {
  title: 'ui/CardList/EmptyList',
  parameters: { layout: 'centered' },
};

const wrapper = css`
  width: 320px;
`;

export const Default: StoryObj = {
  render: () => (
    <div css={wrapper}>
      <EmptyList onAddCard={() => {}} />
    </div>
  ),
};
