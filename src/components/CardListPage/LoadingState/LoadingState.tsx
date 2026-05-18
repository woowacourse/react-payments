import {
  CardThumb,
  Container,
  FooterPlaceholder,
  Line,
  Lines,
  List,
  Row,
  Title,
} from './LoadingState.styles';

export function LoadingState() {
  return (
    <Container>
      <Title>보유 카드</Title>
      <List>
        {Array.from({ length: 3 }).map((_, index) => (
          <Row key={index}>
            <CardThumb />
            <Lines>
              <Line width="60%" />
              <Line width="80%" />
              <Line width="40%" />
            </Lines>
          </Row>
        ))}
      </List>
      <FooterPlaceholder />
    </Container>
  );
}
