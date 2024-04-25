import { FlexCenter } from "@/style/common";
import { styled, css } from "styled-components";

const CardWrapper = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
`;

const CardOuter = styled.div<{ isFront: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${({ isFront }) =>
    isFront ? "rotateY(0deg)" : "rotateY(180deg)"};
  cursor: pointer;
  box-shadow: ${({ isFront, theme }) =>
    isFront
      ? `4px 4px 4px ${theme.COLOR["grey-2"]}`
      : `-4px 4px 4px ${theme.COLOR["grey-2"]}`};
  border-radius: 4px;
`;

const CardInner = styled.div<{
  $cardTypeColor: string | null;
  isFront: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: ${({ isFront }) => (isFront ? "8px 12px" : "0")};
  background-color: ${({ theme, $cardTypeColor }) =>
    $cardTypeColor ? $cardTypeColor : theme.COLOR["grey-3"]};
  border-radius: 4px;
  position: absolute;
  backface-visibility: hidden;
  transform: ${({ isFront }) =>
    !isFront ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  display: flex;
  justify-content: center;
  width: 170px;
  margin-top: 10px;
  gap: 10px;
`;

const CardNumbers = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 3px;
  width: 170px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

const LogoBox = styled.div<{ color: string }>`
  width: 36px;
  height: 22px;
  border-radius: 1.5px;
  display: flex;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;

const Input = styled.input<{ $center?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}
  background-color: transparent;
  color: white;
  width: 100%;
  flex-shrink: 1;
`;

const CardCVCPart = styled.div`
  height: 24px;
  width: 212px;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.COLOR["gold-2"]};
  margin-top: 75px;
  font-size: 14px;
`;

const CVCNumberBox = styled.span`
  width: 45px;
  ${FlexCenter}
`;

const S = {
  FlexBox,
  CardWrapper,
  CreditCardInfo,
  CardNumbers,
  Input,
  CardCVCPart,
  LogoBox,
  CVCNumberBox,
  CardInner,
  CardOuter,
};

export default S;
