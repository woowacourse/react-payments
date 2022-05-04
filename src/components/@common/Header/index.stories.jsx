import Header from '.';

export default {
  title: 'Component/@Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Header {...args} />;

const PreviousButtonHeader = Template.bind({});
PreviousButtonHeader.args = { children: '기본 타이틀' };

export { PreviousButtonHeader };
