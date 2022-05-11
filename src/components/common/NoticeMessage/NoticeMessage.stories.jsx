import NoticeMessage from './NoticeMessage';
import CardInfoContextProvider from 'CardInfoContextProvider';

export default {
  title: 'CardAddSuccessPage/NoticeMessage',
  component: NoticeMessage,
  decorators: [
    (NoticeMessage) => (
      <CardInfoContextProvider>
        <NoticeMessage />
      </CardInfoContextProvider>
    ),
  ],
};
const Template = (args) => <NoticeMessage {...args} />;

export const NoticeUserMessage = Template.bind({});
NoticeUserMessage.args = {
  text: 'hello',
};
