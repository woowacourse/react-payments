import backButtonImg from "src/assets/back-button.png";
import { useNavigate } from "react-router-dom";
import { Styled } from "./Header.styles";

interface HeaderProps {
  headingText: string;
  backButton?: boolean;
}

function Header({ headingText, backButton }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Styled.HeaderContainer>
      {backButton && (
        <Styled.BackButton onClick={() => navigate(-1)}>
          <img src={backButtonImg} alt="뒤로 가기" />
        </Styled.BackButton>
      )}
      <Styled.Heading>{headingText}</Styled.Heading>
    </Styled.HeaderContainer>
  );
}

export default Header;
