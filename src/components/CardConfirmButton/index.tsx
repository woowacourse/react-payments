import styled from 'styled-components';
import BasicButton from '../common/Button';

interface CardConfirmButtonProps {
  content: string;
  onClick: () => void;
}

const CardConfirmButton = ({ content, onClick }: CardConfirmButtonProps) => {
  return <StyledButton content={content} onClick={onClick} type={'button'} />;
};

const StyledButton = styled(BasicButton)`
  width: 320px;
  height: 44px;

  font-size: 15px;

  border-radius: 5px;
`;

export default CardConfirmButton;
