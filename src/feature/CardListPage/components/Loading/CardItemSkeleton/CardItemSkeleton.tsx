import styled from "styled-components";

const CardItemSkeleton = () => {
  return (
    <CardItemSkeltonLayout>
      <CardIconSkeleton />
      <CardInformationSkeletonBox>
        <CardCompanySkeleton />
        <CardNumberSkeleton />
        <ExpiryDateSkeleton />
      </CardInformationSkeletonBox>
    </CardItemSkeltonLayout>
  );
};

export default CardItemSkeleton;

const CardItemSkeltonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 8px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 16px 12px;
`;

const CardIconSkeleton = styled.div`
  width: 64px;
  height: 40px;
  border-radius: 6px;
  background-color: #ebebeb;
`;

const CardInformationSkeletonBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardCompanySkeleton = styled.span`
  width: 80px;
  height: 14px;
  border-radius: 4px;
  background-color: #ebebeb;
`;

const CardNumberSkeleton = styled.span`
  width: 140px;
  height: 10px;
  border-radius: 4px;
  background-color: #ebebeb;
`;

const ExpiryDateSkeleton = styled.span`
  width: 60px;
  height: 9px;
  border-radius: 4px;
  background-color: #ebebeb;
`;
