import Button from '../Button/Button';
import MESSAGE from '../../constants/Message';
import { StyledRegistrationContainer, StyledImage, StyledPhrase, StyledPage } from './style';
import registration from '../../assets/image/registration.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const { LABEL } = MESSAGE;

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledPage>
      <StyledRegistrationContainer>
        <StyledImage src={registration} alt="registration" />
        <StyledPhrase>
          {location.state.firstValue}로 시작하는 <br />
          {location.state.selectedCardValue}가 등록되었어요.
        </StyledPhrase>
        <Button
          label={LABEL.button}
          onClick={() => {
            navigate('/react-payments');
          }}
        />
      </StyledRegistrationContainer>
    </StyledPage>
  );
};

export default Registration;
