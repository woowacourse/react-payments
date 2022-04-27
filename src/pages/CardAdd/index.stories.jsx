import CardAdd from '.';
import '../../index.css'; // 루트 디렉터리 세팅하기!

export default {
  title: 'Page/CardAdd',
  component: CardAdd,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <CardAdd {...args} />;

export const Page = Template.bind({});
Page.args = {};
