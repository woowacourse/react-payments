import styled from '@emotion/styled';

export const CardContainer = styled.div<{ backgroundColor: string }>`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px 12px;
  width: 212px;
  height: 132px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardChip = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background-color: #ddcd78;
`;

export const CardNumber = styled.div`
  height: 20px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 0 5px;
  display: flex;
  align-item: center;
  gap: 16px;
  box-sizing: border-box;
`;

export const CardExpirationDate = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px;
  letter-spacing: 1px;
`;
