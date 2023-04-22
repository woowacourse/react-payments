import styled from 'styled-components';

interface Props {
  title: string;
  onClickBack?: (e: React.MouseEvent) => void;
}

const BackBtn = () => (
  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.30425 1L1.36475 8.78658L9.15133 15.7261" stroke="#525252" stroke-width="1.5" />
  </svg>
);

const Header = ({ title, onClickBack }: Props) => {
  return (
    <HeaderWrapper>
      {onClickBack && (
        <BackButton onClick={onClickBack}>
          <BackBtn />
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
