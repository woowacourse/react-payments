import styled from "styled-components";

export const CardContainer = styled.div<{ cardCompanyColor: string }>`
  width: 212px;
  height: 132px;
  background: ${(props) => props.cardCompanyColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.cardPreviewText};
`;

export const CardHeader = styled.div`
  padding: 8px 12px 0;
  display: flex;
  justify-content: space-between;
`;

export const CardIC = styled.div`
  width: 36px;
  height: 22px;
  background: ${({ theme }) => theme.colors.cardPreviewICColor};
  border: 0.5px solid ${({ theme }) => theme.colors.cardPreviewICBorder};
  border-radius: 4px;
`;

export const CardBrandImg = styled.img`
  width: 36px;
  height: 22px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 25px 12px 17px;
  gap: 8px;
`;

export const CardPreviewTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 20px;
  gap: 10px;
`;

export const PreviewText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
  min-width: 38px;
`;

export const HiddenNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const HiddenNumber = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.cardPreviewText};
`;
