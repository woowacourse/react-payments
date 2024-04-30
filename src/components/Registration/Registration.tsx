import ConfirmationButton from '../ConfirmationButton/ConfirmationButton';
import * as Styled from './style';
import registration from '../../assets/image/registration.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleConfirmationButtonOnClick = () => {
    navigate('/react-payments');
  };

  return (
    <Styled.Registration>
      <Styled.RegistrationContainer>
        <Styled.Image src={registration} alt="registration" />
        <Styled.Phrase>
          {location.state.firstValue}로 시작하는 <br />
          {location.state.selectedCardValue}가 등록되었어요.
        </Styled.Phrase>
        <ConfirmationButton isSubmit={false} onClick={handleConfirmationButtonOnClick} />
      </Styled.RegistrationContainer>
    </Styled.Registration>
  );
};

export default Registration;
