import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../../../assets/previous.svg';

interface HeaderProps {
  title: string;
  hasBackHistory: boolean;
}

export type { HeaderProps };

function Header({ title, hasBackHistory }: HeaderProps) {
  const navigate = useNavigate();

  const navigatePrevious = () => navigate(-1);

  return (
    <StyledHeader>
      {hasBackHistory && (
        <StyledBackHistory onClick={navigatePrevious}>
          <ChevronLeft />
        </StyledBackHistory>
      )}
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

const StyledBackHistory = styled.div`
  width: 16px;
  height: 16px;
`;

const StyledHeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 0 0 0 16px;
`;

export default Header;
