import { useNavigate } from 'react-router-dom';
import * as Styled from './AddCardButton.styles';

const AddCardButton = () => {
  const navigate = useNavigate();
  return (
    <Styled.Wrapper>
      <Styled.Button onClick={() => navigate('/add-card')}>+</Styled.Button>
    </Styled.Wrapper>
  );
};

export default AddCardButton;
