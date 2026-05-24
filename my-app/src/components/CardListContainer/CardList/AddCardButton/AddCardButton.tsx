import { useNavigate } from 'react-router';
import { StyledButton } from './AddCardButton.styles';

function AddCardButton() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate('/add');
  }

  return <StyledButton onClick={handleOnClick}>+ 카드 추가</StyledButton>;
}

export default AddCardButton;
