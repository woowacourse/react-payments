import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 212px;
  height: 132px;
  background: rgba(213, 213, 213, 1);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.cardPreviewText};
`;

export const CardCVCContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 24px;
  width: 100%;
  min-height: 24px;
  background-color: rgba(203, 186, 100, 1);
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
