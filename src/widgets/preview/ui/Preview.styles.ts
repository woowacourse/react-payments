import styled from '@emotion/styled';

export const CardBackground = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  width: 212px;
  height: 132px;
  padding: 8px 12px;
  border-radius: 4px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardPreview = styled.div`
  width: 36px;
  height: 22px;
`;

export const PaymentSim = styled(CardPreview)`
  background-color: #ddcd78;
  border-radius: 4px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 13px 0 5px;
  gap: 8px;
`;

export const CardNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  min-height: 20px;
  gap: 8px;

  & > div {
    min-width: 41px;
  }
`;

export const InfoText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2.24px;
`;

export const Secret = styled(InfoText)`
  letter-spacing: 2px;
`;

export const CardImage = styled.img`
  width: 36px;
  height: 22px;
`;
