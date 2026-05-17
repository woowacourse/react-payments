import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import errorImage from "@/assets/ErrorImage.png";
import Button from "../common/Button";

interface CardListErrorProps {
  onRetry: () => void;
}

const CardListError = ({ onRetry }: CardListErrorProps) => (
  <Container>
    <ErrorImage src={errorImage} alt="errorImage" />
    <ErrorTitle>카드 목록을 불러올 수 없어요</ErrorTitle>
    <Description>잠시 후 다시 시도해 주세요.</Description>
    <Button onClick={onRetry}>다시 시도</Button>
  </Container>
);

const Container = styled.div`
  padding-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ErrorImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const ErrorTitle = styled.h2`
  margin: 1rem 0 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

const Description = styled.p`
  margin: 1rem;
  font-size: 0.8rem;
  font-weight: 400;

  color: ${COLOR_PALETTE["GREY-600"]};
`;

export default CardListError;
