import MessageBlock from "./messageBlock.component";

export default {
  title: "MessageBlock",
  component: MessageBlock,
};

const Template = (args) => <MessageBlock {...args} />;

export const ErrorMessageBlock = Template.bind({});

ErrorMessageBlock.args = {
  children: "에러입니다",
  messageClass: "error-message",
};

export const SuccessMessageBlock = Template.bind({});

SuccessMessageBlock.args = {
  children: "성공입니다",
  messageClass: "success-message",
};
