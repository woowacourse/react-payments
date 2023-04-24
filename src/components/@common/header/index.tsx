import backButtonImg from "src/assets/back-button.png";
import { useNavigate } from "react-router-dom";
import { Styled as S } from "./Header.styles";

interface HeaderProps {
  headingText: string;
  backButton?: boolean;
}

function Header({ headingText, backButton }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      {backButton && (
        <S.BackButton onClick={() => navigate(-1)}>
          <img src={backButtonImg} alt="뒤로 가기" />
        </S.BackButton>
      )}
      <S.Heading>{headingText}</S.Heading>
    </S.HeaderContainer>
  );
}

export default Header;
