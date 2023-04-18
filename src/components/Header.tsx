import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const BackHistory = styled.div`
  width: 16px;
  height: 16px;
`;

const HeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  height: 16px;
`;

interface HeaderProps {
  title: string;
  hasBackHistory: boolean;
}

export type { HeaderProps };

function Header({ title, hasBackHistory }: HeaderProps) {
  return (
    <StyledHeader>
      {hasBackHistory && <BackHistory>{'<'}</BackHistory>}
      <HeaderTitle>{title}</HeaderTitle>
    </StyledHeader>
  );
}

export default Header;
