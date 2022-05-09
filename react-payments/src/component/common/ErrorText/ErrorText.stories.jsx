import ErrorText from "./ErrorText";

export default {
  title: "Common/ErrorText",
  component: ErrorText,
};

export const NetworkErrorText = (args) => (
  <ErrorText {...args}>
    서버에 문제가 생겼습니다.
    <br />
    다시 시도해주세요
  </ErrorText>
);
NetworkErrorText.args = {
  label: "서버 에러입니다!",
};

export const RouteErrorText = (args) => (
  <ErrorText {...args}>없는 페이지 입니다.</ErrorText>
);
RouteErrorText.args = {
  label: "404 에러!",
};
