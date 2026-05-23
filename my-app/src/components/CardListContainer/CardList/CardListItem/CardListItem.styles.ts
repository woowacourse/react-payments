import styled from '@emotion/styled';

export const CardListItemContainer = styled.li`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid #e6e6e6;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardColorPreview = styled.div<{ backgroundColor: string }>`
  flex-shrink: 0;
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const CardInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const IssuerName = styled.p`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  color: #353c49;
`;

export const CardNumber = styled.p`
  margin: 0;

  font-size: 11px;
  font-weight: 400;
  color: #8c8c8c;
`;

export const ExpirationDate = styled.p`
  margin: 0;

  font-size: 10px;
  font-weight: 400;
  color: #8c8c8c;
`;

export const DeleteButton = styled.button`
  padding: 4px 8px;
  border: 0;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  > img {
    width: 14px;
  }
`;
