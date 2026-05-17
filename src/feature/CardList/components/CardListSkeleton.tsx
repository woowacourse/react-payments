import styled from 'styled-components';

const CardListSkeleton = () => {
  return (
    <Wrapper>
      {Array.from({ length: 3 }).map((_, index) => (
        <SkeletonItem key={index}>
          <SkeletonInfoGroup>
            <SkeletonColorBox />

            <SkeletonTextGroup>
              <SkeletonLine $width="80px" $height="16px" />
              <SkeletonLine $width="150px" $height="12px" />
              <SkeletonLine $width="100px" $height="12px" />
            </SkeletonTextGroup>
          </SkeletonInfoGroup>
        </SkeletonItem>
      ))}
      <SkeletonAddButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  gap: 16px;

  width: 100%;
`;

const SkeletonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 18px 20px;

  border: 1px solid #e6e6e6;
  border-radius: 6px;
`;

const SkeletonInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SkeletonColorBox = styled.div`
  width: 74px;
  height: 45px;

  border-radius: 4px;

  background-color: #ebebeb;
`;

const SkeletonTextGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const SkeletonLine = styled.span<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-radius: 3px;

  background-color: #ebebeb;
`;

const SkeletonAddButton = styled.div`
  width: 100%;
  height: 40px;

  background-color: #f7f7f7;

  border: 1px dashed #f0f0f0;
  border-radius: 4px;
`;

export default CardListSkeleton;
