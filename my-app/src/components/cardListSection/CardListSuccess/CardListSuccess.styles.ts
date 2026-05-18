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

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

export const CardPreviewBox = styled.div<{ backgroundColor: string }>`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

export const CardCompany = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #353c49;
`;

export const CardNumber = styled.p`
  font-size: 11px;
  font-weight: 400;
  color: #8c8c8c;
`;

export const ExpirationDate = styled.p`
  font-size: 9.5px;
  font-weight: 400;
  color: #8c8c8c;
`;

export const CardDeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const CardAddButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px dashed #e6e6e6;
  border-radius: 5px;
  background-color: transparent;
  padding: 12px;
  font-size: 13px;
  font-weight: 500;
  color: #8c8c8c;
  cursor: pointer;
`;
