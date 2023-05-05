/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story as StoryType, Meta } from '@storybook/react';
import GlobalStyle, { GlobalLayout } from 'style/globalStyle';
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <GlobalLayout>
          <Story />
        </GlobalLayout>
      </>
    ),
  ],
} satisfies Meta<typeof LoadingSpinner>;

const Template: StoryType<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {

};

export const NewCardSpinner = Template.bind({});
NewCardSpinner.args = {
  label: '카드를 등록중입니다...'
};

export const NewCardNicknameSpinner = Template.bind({});
NewCardNicknameSpinner.args = {
  label: '카드 별칭을 설정중입니다...'
};
