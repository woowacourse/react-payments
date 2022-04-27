import Header from '.';
import '../../../index.css'; // 루트 디렉터리 세팅하기!

export default {
  title: 'Component/@Common/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Header {...args} />;

const DefaultHeader = Template.bind({});
DefaultHeader.args = { title: '기본 타이틀' };

const PreviousButtonHeader = Template.bind({});
PreviousButtonHeader.args = { title: '이전 페이지 타이틀' };

export { DefaultHeader, PreviousButtonHeader };
