import type { StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import ErrorList from './ErrorList';

export default {
  title: 'ui/CardList/ErrorList',
  parameters: { layout: 'centered' },
};

const wrapper = css`
  width: 320px;
`;

export const Default: StoryObj = {
  render: () => (
    <div css={wrapper}>
      <ErrorList onRetryFetch={() => {}} />
    </div>
  ),
};
