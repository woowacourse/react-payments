import ErrorText, { ErrorTextProps } from "./ErrorText";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/ErrorText",
  component: ErrorText,
} as Meta;

export const NetworkErrorText: Story<ErrorTextProps> = (args) => (
  <ErrorText {...args}>
    서버에 문제가 생겼습니다.
    <br />
    다시 시도해주세요
  </ErrorText>
);
NetworkErrorText.args = {
  label: "서버 에러입니다!",
};

export const RouteErrorText: Story<ErrorTextProps> = (args) => (
  <ErrorText {...args}>없는 페이지 입니다.</ErrorText>
);
RouteErrorText.args = {
  label: "404 에러!",
};
