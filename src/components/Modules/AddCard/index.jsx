import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 213px;
  height: 133px;
  padding: 14px 14px 0;
  font-size: 35px;
  background-color: #d2d2d2;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

function AddCard({ link }) {
  const navigator = useNavigate();

  const onAddClick = () => {
    navigator(link);
  };

  return <CardContainer onClick={onAddClick}>+</CardContainer>;
}

export default AddCard;
