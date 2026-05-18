import styled from '@emotion/styled';

function SkeletonItem() {
  return (
    <CardContainer>
      <div className="skeleton-card" />
      <div className="card-info-container">
        <div className="skeleton-line name" />
        <div className="skeleton-line number" />
        <div className="skeleton-line date" />
      </div>
    </CardContainer>
  );
}

export function CardListSkeleton() {
  return (
    <Container>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonAddButton />
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.75rem;

  .skeleton-card {
    width: 64px;
    height: 40px;
    border-radius: 4px;
    background-color: #ebebeb;
    flex-shrink: 0;
  }

  .card-info-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 0 0.75rem 0.75rem;
  }

  .skeleton-line {
    background-color: #ebebeb;
    border-radius: 4px;
  }

  .skeleton-line.name {
    width: 30%;
    height: 14px;
  }

  .skeleton-line.number {
    width: 55%;
    height: 10px;
  }

  .skeleton-line.date {
    width: 22%;
    height: 9px;
  }
`;

const SkeletonAddButton = styled.div`
  height: 44px;
  border-radius: 5px;
  background-color: #f7f7f7;
  border: 1px dashed #f0f0f0;
`;
