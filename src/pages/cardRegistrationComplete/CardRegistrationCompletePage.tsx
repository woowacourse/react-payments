import { useLocation, useNavigate } from 'react-router-dom';
import CardRegistrationCompleteImage from '../../assets/CardRegistrationComplete.png';
import Button from '../../components/common/button/Button';
import * as Styled from './CardRegistrationCompletePage.styled';

const CardRegistrationCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cardFirstFourDigits = location.state.cardFirstFourDigits;
  const cardCompany = location.state.cardCompany;

  const navigateToNewCardPage = () => {
    navigate('/');
  };

  return (
    <Styled.RegistrationCompleteContainer>
      <div>
        <Styled.CardRegistrationCompleteImage
          src={CardRegistrationCompleteImage}
          alt=''
        />
      </div>
      <Styled.CardInfoWrapper>
        <Styled.CardInfoText>
          {cardFirstFourDigits}로 시작하는
        </Styled.CardInfoText>
        <Styled.CardInfoText>{cardCompany}가 등록되었어요.</Styled.CardInfoText>
      </Styled.CardInfoWrapper>
      <Styled.ButtonWrapper>
        <Button
          onClick={navigateToNewCardPage}
          text='확인'
          style={{ borderRadius: 8 }}
        ></Button>
      </Styled.ButtonWrapper>
    </Styled.RegistrationCompleteContainer>
  );
};

export default CardRegistrationCompletePage;
