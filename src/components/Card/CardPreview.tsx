import styled from "@emotion/styled";
import Mastercard from "../../../public/Mastercard.svg";
import Visa from "../../../public/Visa.svg";
import Diners from "../../../public/Diners.svg";
import Amex from "../../../public/Amex.svg";
import Union from "../../../public/UnionPay.svg";
import { CARD_COLORS } from "../../constants/cardConstants";

interface Props {
  cardNumbers: { first: string; second: string; third: string; fourth: string };
  EXP: { mm: string; yy: string };
  cardFirm: { value: string; label: string };
  cardBrand: "visa" | "master" | "diners" | "amex" | "unionpay" | null;
}
const BRAND_LOGO = {
  visa: Visa,
  master: Mastercard,
  diners: Diners,
  amex: Amex,
  unionpay: Union,
};

export default function CardPreview({
  cardNumbers,
  EXP,
  cardFirm,
  cardBrand,
}: Props) {
  const cardColor = CARD_COLORS[cardFirm.value] ?? "#333333";
  return (
    <CardPreviewContainer cardColor={cardColor}>
      <IcChip />
      <CardBrandLogo>
        {cardBrand && <CardBrandImage src={BRAND_LOGO[cardBrand]} />}
      </CardBrandLogo>
      <CardNumberList>
        <CardNumber>{cardNumbers.first}</CardNumber>
        <CardNumber>{cardNumbers.second}</CardNumber>
        <CardNumber>
          {cardNumbers.third.split("").map((_, bulletValue) => (
            <BulletStyle key={bulletValue} />
          ))}
        </CardNumber>
        <CardNumber>
          {cardNumbers.fourth.split("").map((_, bulletValue) => (
            <BulletStyle key={bulletValue} />
          ))}
        </CardNumber>
      </CardNumberList>
      <CardExpiry>
        <EXPNumber>{EXP.mm}</EXPNumber>
        {EXP.yy && <EXPNumber>/{EXP.yy}</EXPNumber>}
      </CardExpiry>
    </CardPreviewContainer>
  );
}

const CardPreviewContainer = styled.div<{ cardColor: string }>`
  width: 212px;
  height: 132px;
  position: relative;
  border-radius: 4px;
  background-color: ${({ cardColor }) => cardColor};
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const IcChip = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 36px;
  height: 22px;
  border: 0.5px solid #ddcd78;
  background-color: #ddcd78;
  border-radius: 4px;
`;

const CardBrandLogo = styled.div`
  position: absolute;
  top: 8px;
  left: 164px;
  width: 36px;
  height: 22px;
`;

const CardBrandImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardNumberList = styled.div`
  display: flex;
  position: absolute;
  top: 44px;
  left: 17px;
  gap: 10px;
`;

const CardNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
  color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  min-width: 34px;
`;

const BulletStyle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  line-height: 20px;
  transform: translateY(-2px);
`;

const CardExpiry = styled.div`
  position: absolute;
  top: 72px;
  left: 17px;
  display: flex;
`;
const EXPNumber = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 8%;
  color: white;
`;
