import styled from '@emotion/styled';
import Skeleton from '../../Common/Skeleton/Skeleton';

export default function SkeletonCardList() {
  return (
    <Container>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Wrapper key={idx}>
          <Skeleton width="64px" height="40px" />

          <Content>
            <Skeleton width="80px" height="14px" />
            <Skeleton width="140px" height="10px" />
            <Skeleton width="60px" height="9px" />
          </Content>
        </Wrapper>
      ))}

      <Skeleton width="100%" height="44px" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 320px;
  height: 69px;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 178px;
`;
