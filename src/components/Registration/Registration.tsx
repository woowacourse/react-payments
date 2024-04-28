import Button from '../Button/Button';
import MESSAGE from '../../constants/Message';
import * as Styled from './style';
import registration from '../../assets/image/registration.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const { LABEL } = MESSAGE;

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Styled.Registration>
      <Styled.RegistrationContainer>
        <Styled.Image src={registration} alt="registration" />
        <Styled.Phrase>
          {location.state.firstValue}로 시작하는 <br />
          {location.state.selectedCardValue}가 등록되었어요.
        </Styled.Phrase>
        <Button
          label={LABEL.button}
          onClick={() => {
            navigate('/react-payments');
          }}
        />
      </Styled.RegistrationContainer>
    </Styled.Registration>
  );
};

export default Registration;
