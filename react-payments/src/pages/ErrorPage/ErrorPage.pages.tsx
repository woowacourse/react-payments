import ErrorText from "component/common/ErrorText/ErrorText";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import { useEffect } from "react";
import { ColumnFlexWrapper } from "styles/wrapper";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <ColumnFlexWrapper gap="30">
      <ErrorText label="서버 에러입니다!">
        서버에 문제가 생겼습니다.
        <br />
        다시 시도해주세요.
      </ErrorText>
      <LinkButton
        onClick={() => {
          window.location.reload();
        }}
      >
        돌아가기
      </LinkButton>
    </ColumnFlexWrapper>
  );
};

export default ErrorPage;
