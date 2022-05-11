import ErrorText from "component/common/ErrorText/ErrorText";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import { ColumnFlexWrapper } from "styles/wrapper";

const NoRoutePage = () => {
  return (
    <ColumnFlexWrapper gap="50">
      <ErrorText label="404에러!">없는 페이지 입니다.</ErrorText>
      <LinkButton>돌아가기</LinkButton>
    </ColumnFlexWrapper>
  );
};

export default NoRoutePage;
