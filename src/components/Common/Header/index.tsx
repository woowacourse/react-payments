import styled from 'styled-components';
import PreviousButton from '../Button/PreviousButton';

interface HeaderProps {
  title: string;
  hasBackHistory: boolean;
}

export type { HeaderProps };

function Header({ title, hasBackHistory }: HeaderProps) {
  return (
    <StyledHeader>
      {hasBackHistory && <PreviousButton />}
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  padding: 20px;
  align-items: center;
  font-size: 16px;
`;

const StyledHeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0 0 0 16px;
`;

export default Header;
