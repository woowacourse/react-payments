import type { StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import SkeletonList from './SkeletonList';

export default {
  title: 'ui/CardList/SkeletonList',
  parameters: { layout: 'centered' },
};

const wrapper = css`
  width: 320px;
`;

export const Default: StoryObj = {
  render: () => (
    <div css={wrapper}>
      <SkeletonList />
    </div>
  ),
};
