import styled from 'styled-components';
import CHECK_IMG from '../../assets/images/check.png';
import { Link, useLocation } from 'react-router-dom';
import ErrorPage from '../ErrorPage';

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

export default function RegistrationConfirm() {
  const { state } = useLocation();

  if (!state) {
    return <ErrorPage />;
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src={CHECK_IMG} />
      </ImageWrapper>
      <Text>
        {state.cardNumber}로 시작하는 <br />
        {state.cardCompany}가 등록되었어요.
      </Text>
      <StyledLink to="/">확인</StyledLink>
    </Container>
  );
}
