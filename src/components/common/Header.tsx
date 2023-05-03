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
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;
  padding: 0 28px;
`;

const BackButton = styled.button`
  cursor: pointer;

  border: none;
  background-color: transparent;

  font-size: 16px;
`;

const Title = styled.h1`
  margin-left: 16px;

  font-size: 16px;
  letter-spacing: -0.085em;
  color: #383838;
`;
