import MessageBox from "component/common/MessageBox/MessageBox.component";

export default {
  title: "Common/MessageBox",
  component: MessageBox,
};

export const ErrorMessageBox = (args) => (
  <MessageBox {...args}>에러입니다</MessageBox>
);

ErrorMessageBox.args = {
  type: "error",
};

export const SuccessMessageBox = (args) => (
  <MessageBox {...args}>성공입니다</MessageBox>
);

SuccessMessageBox.args = {
  type: "success",
};
