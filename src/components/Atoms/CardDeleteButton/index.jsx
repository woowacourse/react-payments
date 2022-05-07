import styled from 'styled-components';
import useCardDeleteButton from '../../../hooks/useCardDeleteButton';

const Button = styled.button`
  background-color: transparent;
  color: red;
  cursor: pointer;

  &:hover {
    color: #fc7272;
  }
`;

function CardDeleteButton({ children }) {
  const { onDeleteClick } = useCardDeleteButton();

  return <Button onClick={onDeleteClick}>{children}</Button>;
}

export default CardDeleteButton;
