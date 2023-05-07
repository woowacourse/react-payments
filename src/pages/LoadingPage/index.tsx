import styled, { css } from "styled-components";
import Loader from "components/Loader";
import { CardLoader } from "components/svg";

const LoadingPage = () => {
  return (
    <S.Wrapper>
      <Loader message="카드를 등록중입니다." messageStyle={messageStyle}>
        <CardLoader />
      </Loader>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    margin: 245px 0 282px;
  `,
};

export const messageStyle = css`
  margin-top: 44px;
  text-align: center;
  opacity: 0.9;
`;

export default LoadingPage;
