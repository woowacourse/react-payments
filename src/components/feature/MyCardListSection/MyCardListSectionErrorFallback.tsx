import ErrorImage from "@assets/Error.png";
import RetryButton from "@components/feature/RetryButton";
import styled from "@emotion/styled";

const MyCardListSectionErrorFallback = () => {
  return (
    <Wrapper>
      <ErrorIcon src={ErrorImage} alt="Error" />
      <Description>카드 목록을 불러올 수 없어요</Description>
      <Description>잠시 후 다시 시도해 주세요.</Description>
      <RetryButtonContainer>
        <RetryButton />
      </RetryButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorIcon = styled.img`
  width: 4.75rem;
  height: 4.75rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1rem 0 0 0;
`;

const RetryButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export default MyCardListSectionErrorFallback;
