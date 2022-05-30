import NoticeMessage from '.';

export default {
  title: 'CardAddSuccessPage/NoticeMessage',
  component: NoticeMessage,
};
const Template = (args) => <NoticeMessage {...args} />;

export const NoticeUserMessage = Template.bind({});
NoticeUserMessage.args = {
  text: 'hello',
};
