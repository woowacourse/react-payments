import Card from '.';
import '../../index.css'; // 루트 디렉터리 세팅하기!

export default {
  title: 'Component/Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Card {...args} />;

export const Samsung = Template.bind({});
Samsung.args = {
  name: '삼성 카드',
};
