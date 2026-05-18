import {
  AddButton,
  CardPlaceholder,
  Container,
  Description,
  EmptyBox,
  Heading,
  Title,
} from './NoCardsState.styles';

export function NoCardsState() {
  const handler = () => {};

  return (
    <Container>
      <Title>보유 카드</Title>
      <EmptyBox>
        <CardPlaceholder />
        <Heading>등록된 카드가 없습니다</Heading>
        <Description>아래 버튼을 눌러 첫 카드를 등록해보세요</Description>
        <AddButton type="button" onClick={handler}>
          카드 추가하기
        </AddButton>
      </EmptyBox>
    </Container>
  );
}
