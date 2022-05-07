import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 133px;
  padding: 14px 14px 0;
  background-color: #d2d2d2;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const AddButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 30px;
  background-color: transparent;
`;

function AddCard({ link }) {
  const navigator = useNavigate();
  const onAddClick = () => {
    navigator(link);
  };

  return (
    <CardContainer>
      <AddButton onClick={onAddClick}>+</AddButton>
    </CardContainer>
  );
}

export default AddCard;
