import styled from 'styled-components';

type Props = {
  text: string;
  onClickBackButton?: () => void;
};

function Header({ text, onClickBackButton }: Props) {
  return (
    <Container>
      {onClickBackButton ? (
        <BackButton onClick={onClickBackButton}>&lt; &nbsp; {text}</BackButton>
      ) : (
        <BackButton onClick={onClickBackButton}>&nbsp; {text}</BackButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  margin-right: auto;
`;

const BackButton = styled.span`
  margin-right: 18px;
  cursor: pointer;
`;
export default Header;
