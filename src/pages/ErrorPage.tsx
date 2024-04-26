import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ERROR_IMG from '../assets/images/error.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;

  width: 100%;
  height: 100%;

  padding: 0 28px;
`;

const ImageWrapper = styled.div`
  width: 76px;
  height: 76px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 2.25rem;
  text-align: center;

  color: #353c49;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;

  border-radius: 5px;

  background-color: #333333;
  font-size: 0.9375rem;
  font-weight: 700;
  color: #ffffff;
`;

export default function ErrorPage() {
  return (
    <Container>
      <ImageWrapper>
        <Image src={ERROR_IMG} />
      </ImageWrapper>
      <Text>잘못된 페이지 접근입니다!</Text>
      <StyledLink to="/">카드 등록하러 가기</StyledLink>
    </Container>
  );
}
