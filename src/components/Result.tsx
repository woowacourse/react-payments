import styled from '@emotion/styled';
import Flex from './Common/Flex';
import Text from './Common/Text';
import CommonButton from './Common/Button';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 76px;
  height: 76px;
`;

const Button = styled(CommonButton)`
  width: 100%;
`;

export interface ResultProps {
  type: 'success' | 'error';
  message: string;
  description?: string;
  action?: string;
  onAction: () => void;
}

export default function Result(props: ResultProps) {
  return (
    <Container direction="column" alignItems="center" justifyContent="center" gap={25}>
      <Image alt={`${props.type} icon`} src={`${import.meta.env.BASE_URL}${props.type}.svg`} />
      <Flex direction="column">
        <Text size="2xl" weight="bold" align="center">
          {props.message}
        </Text>
        <Text size="s" color="description" align="center">
          {props.description}
        </Text>
      </Flex>
      <Button onClick={props.onAction}>{props.action ?? '확인'}</Button>
    </Container>
  );
}
