import { MouseEventHandler } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  onClickBackButton?: () => void;
};

function Header({ text, onClickBackButton }: Props) {
  const handleClickBackButton: MouseEventHandler<HTMLSpanElement> = (e) => {
    if (onClickBackButton) onClickBackButton();
  };

  return (
    <Container>
      <BackButton onClick={handleClickBackButton}>
        {onClickBackButton ? `< ${text}` : text}
      </BackButton>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  margin-right: auto;
`;

const BackButton = styled.span`
  margin-right: 18px;
  cursor: pointer;
`;
export default Header;
