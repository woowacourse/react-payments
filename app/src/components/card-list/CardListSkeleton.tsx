import styled from '@emotion/styled';

export function CardListSkeleton() {
  return <Container>로딩중</Container>;
}

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 1rem;
  background-color: orange;
`;
