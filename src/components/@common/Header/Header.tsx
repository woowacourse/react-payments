import { useNavigate } from 'react-router-dom';
import * as Styled from './Header.styles';

type HeaderProps = {
  pageTitle?: string;
};
export default function Header({ pageTitle = 'Page Not Found :(' }: HeaderProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Styled.Root>
      {pageTitle !== '보유카드' && <Styled.NavigationButton onClick={handleClick}>&lt;</Styled.NavigationButton>}
      <Styled.HeaderTitle>{pageTitle}</Styled.HeaderTitle>
    </Styled.Root>
  );
}
