import exclamationSrc from '../../../assets/Exclamation_mark.svg';
import {
  Container,
  Description,
  ErrorBox,
  ErrorIcon,
  Heading,
  RetryButton,
  Title,
} from './ErrorState.styles';

export function ErrorState() {
  const handler = () => {};

  return (
    <Container>
      <Title>보유 카드</Title>
      <ErrorBox>
        <ErrorIcon src={exclamationSrc} alt="에러" />
        <Heading>카드 목록을 불러올 수 없어요</Heading>
        <Description>잠시 후 다시 시도해 주세요.</Description>
        <RetryButton type="button" onClick={handler}>
          다시 시도
        </RetryButton>
      </ErrorBox>
    </Container>
  );
}
