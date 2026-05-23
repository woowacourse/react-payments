import styled from 'styled-components';

const SKELETON_COUNT = 3;

const CardListLoading = () => {
  return (
    <List aria-label='카드 목록을 불러오는 중'>
      {Array.from({length: SKELETON_COUNT}, (_, index) => (
        <SkeletonCard key={index}>
          <SkeletonPreview />
          <SkeletonContent>
            <SkeletonTitle />
            <SkeletonNumber />
            <SkeletonDate />
          </SkeletonContent>
        </SkeletonCard>
      ))}
      <AddSkeleton />
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  padding: 12px;
  gap: 12px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
`;

const SkeletonPreview = styled.div`
  width: 64px;
  height: 40px;
  flex-shrink: 0;
  background-color: #ebebeb;
  border-radius: 4px;
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const SkeletonTitle = styled.div`
  width: 80px;
  height: 14px;
  background-color: #ebebeb;
  border-radius: 3px;
`;

const SkeletonNumber = styled.div`
  width: 140px;
  height: 10px;
  background-color: #ebebeb;
  border-radius: 3px;
`;

const SkeletonDate = styled.div`
  width: 60px;
  height: 9px;
  background-color: #ebebeb;
  border-radius: 3px;
`;

const AddSkeleton = styled.div`
  width: 100%;
  height: 43px;
  background-color: #f7f7f7;
  border: 1px dashed #f0f0f0;
  border-radius: 5px;
`;

export default CardListLoading;
