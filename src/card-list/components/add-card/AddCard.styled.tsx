import styled from '@emotion/styled';

const AddCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 130px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #dbdbdb;
  cursor: pointer;
  &::after {
    content: '+';
    font-size: 30px;
    font-weight: 900;
  }
  transition: transform 0.35s;
  &:hover {
    transform: scale(1.06, 1.06);
  }
`;

export default AddCard;
