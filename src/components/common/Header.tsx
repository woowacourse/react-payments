import styled from 'styled-components';
import BackButtonImage from '../../assets/BackButtonImage';

interface HeaderProps {
  title: string;
  onClickBack?: (e: React.MouseEvent) => void;
}

const Header = ({ title, onClickBack }: HeaderProps) => {
  return (
    <HeaderWrapper>
      {onClickBack && (
        <BackButton onClick={onClickBack}>
          <BackButtonImage />
        </BackButton>
      )}
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 72px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`;

const BackButton = styled.button`
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 16px;
  letter-spacing: -0.085em;
  color: #383838;
  margin-left: 16px;
`;
