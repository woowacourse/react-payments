import styled from '@emotion/styled';
import Flex from './Common/Flex';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 76px;
  height: 76px;
`;

const Message = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const Button = styled.button`
  background-color: var(--color-card-background);
  color: var(--color-white);
  height: 45px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

interface ResultProps {
  type: 'success' | 'error';
  message: string;
  action: () => void;
}

export default function Result(props: ResultProps) {
  return (
    <Container direction="column" alignItems="center" justifyContent="center" gap={25}>
      <Image alt={`${props.type} icon`} src={`${import.meta.env.BASE_URL}${props.type}.svg`} />
      <Message>{props.message}</Message>
      <Button onClick={props.action}>확인</Button>
    </Container>
  );
}
