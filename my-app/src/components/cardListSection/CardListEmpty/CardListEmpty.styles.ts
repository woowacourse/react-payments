import styled from '@emotion/styled';

export const CardListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 28px;
  gap: 24px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #353c49;
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const EmptyCardIcon = styled.div`
  width: 160px;
  height: 100px;
  border-radius: 5px;
  border: 1px dashed #d9d9d9;
  margin-top: 100px;
`;

export const EmptyTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #353c49;
`;

export const EmptySubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;

export const CardAddButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background-color: #333333;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
