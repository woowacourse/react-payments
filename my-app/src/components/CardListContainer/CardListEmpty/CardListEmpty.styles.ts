import styled from '@emotion/styled';

export const EmptyListContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const EmptyCardPreview = styled.div`
  width: 160px;
  height: 100px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 1px dashed #d9d9d9;
`;

export const EmptyTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #353c49;
`;

export const EmptyDescription = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;
