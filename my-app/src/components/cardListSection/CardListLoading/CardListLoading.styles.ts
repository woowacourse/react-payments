import styled from '@emotion/styled';

export const CardListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 28px;
  gap: 16px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #353c49;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 12px;
`;

export const ItemSkeleton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardPreviewSkeleton = styled.div`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: #ebebeb;
`;

export const CardInfoSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;
`;

export const CardCompanySkeleton = styled.div`
  width: 40%;
  height: 14px;
  border-radius: 4px;
  background-color: #ebebeb;
`;

export const CardNumberSkeleton = styled.div`
  width: 70%;
  height: 14px;
  border-radius: 4px;
  background-color: #ebebeb;
`;

export const ExpirationDateSkeleton = styled.div`
  width: 30%;
  height: 14px;
  border-radius: 4px;
  background-color: #ebebeb;
`;

export const CardDeleteSkeleton = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #ebebeb;
`;
