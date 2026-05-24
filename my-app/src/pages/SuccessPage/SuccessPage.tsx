import { useLocation, useNavigate } from 'react-router';
import SuccessLogo from '../../assets/SuccessLogo.png';
import { StyledContainer, StyledText } from './SuccessPage.styles';
import CommonButton from '../../common/CommonButton/CommonButton';

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleOnClick() {
    navigate('/');
  }

  return (
    <StyledContainer>
      <img src={SuccessLogo} alt="success-logo" />
      <StyledText>
        {location.state.firstNumber}으로 시작하는
        <br />
        {location.state.issuer}가 등록되었어요.
      </StyledText>
      <CommonButton handleOnClick={handleOnClick} label="확인" />
    </StyledContainer>
  );
}

export default SuccessPage;
