import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import CardAddSuccessImage from '../assets/CardAddSuccessImage.svg';
import {
  SuccessContainer,
  SuccessImage,
  SuccessMessage,
  SubmitButton,
} from './CardAddSuccessPage.styles';

const CardAddSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cardState = location.state;

  if (!cardState) {
    return <Navigate to="/" replace />;
  }

  const { cardNumberPrefixFourth, cardCompany } = cardState;

  const handleSubmit = () => {
    navigate('/', { replace: true });
  };

  return (
      <SuccessContainer>
        <SuccessImage src={CardAddSuccessImage} alt="등록 성공" />
        <SuccessMessage>
          {cardNumberPrefixFourth}로 시작하는 <br />
          {cardCompany}가 등록되었어요.
        </SuccessMessage>
        <SubmitButton onClick={handleSubmit}>확인</SubmitButton>
      </SuccessContainer>

  );
};

export default CardAddSuccessPage;
