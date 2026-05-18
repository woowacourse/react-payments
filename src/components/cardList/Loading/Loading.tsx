import {
  CardThumb,
  Container,
  FooterPlaceholder,
  Line,
  Lines,
  List,
  Row,
  Title,
} from './Loading.styles';

const SKELETON_ROW_COUNT = 3;

export function Loading() {
  return (
    <Container>
      <Title>보유 카드</Title>
      <List>
        {Array.from({ length: SKELETON_ROW_COUNT }).map((_, index) => (
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
