import ToolTip from './ToolTip';

export default {
  title: 'Payments/ToolTip',
  component: ToolTip,
  argTypes: {},
};

const Template = (args) => <ToolTip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  buttonText: '?',
  contentText: '툴팁 텍스트 내용입니다',
};
