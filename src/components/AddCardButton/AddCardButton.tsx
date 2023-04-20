import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #575757;
  margin-top: 100px;
`;

const Button = styled.button`
  width: 208px;
  height: 124px;
  background-color: #e5e5e5;
  border-radius: 5px;
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
`;

const AddCardButton = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button onClick={() => navigate('/add-card')}>+</Button>
    </Wrapper>
  );
};

export default AddCardButton;
