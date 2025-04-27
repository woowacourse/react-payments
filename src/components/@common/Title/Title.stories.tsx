import {Meta, StoryObj} from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    title: {control: 'text'},
    subTitle: {control: 'text'},
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    title: '메인 타이틀',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: '메인 타이틀',
    subTitle: '서브 타이틀',
  },
};
