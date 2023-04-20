import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  headingText: string;
  backButton?: boolean;
}

function Header({ headingText, backButton }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {backButton && (
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={'../../src/assets/back-button.png'} alt="뒤로 가기" />
        </BackButton>
      )}
      <Heading>{headingText}</Heading>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  column-gap: 18px;
  align-items: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
`;

const Heading = styled.h2`
  font-size: 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #383838;
`;
