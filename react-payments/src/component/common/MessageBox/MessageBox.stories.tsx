import MessageBox from "component/common/MessageBox/MessageBox.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/MessageBox",
  component: MessageBox,
} as Meta;

export const ErrorMessageBox: Story<{ styleType: "success" | "error" }> = (
  args
) => <MessageBox {...args}>에러입니다</MessageBox>;

ErrorMessageBox.args = {
  styleType: "error",
};

export const SuccessMessageBox: Story<{ styleType: "success" | "error" }> = (
  args
) => <MessageBox {...args}>성공입니다</MessageBox>;

SuccessMessageBox.args = {
  styleType: "success",
};
