import styled from 'styled-components';

type Props = {
  text: string;
  onClickBackButton?: () => void;
};

export function Header({ text, onClickBackButton }: Props) {
  return (
    <Container>
      <BackButton onClick={onClickBackButton}>
        {onClickBackButton && '<'} &nbsp; {text}
      </BackButton>
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
