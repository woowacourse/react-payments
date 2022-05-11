import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: red;
  cursor: pointer;

  &:hover {
    color: #fc7272;
  }
`;

function CardDeleteButton({ onDeleteClick, children }) {
  return <Button onClick={onDeleteClick}>{children}</Button>;
}

export default CardDeleteButton;
