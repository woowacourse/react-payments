import type { CardCompanyType } from "../../../../../../common/types/CardCompany";
import CardCompanyOption from "./CardCompanyOption/CardCompanyOption";

const mockCardCompany: CardCompanyType[] = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

const CardCompanyOptionList = ({
  handleCardCompanyClick,
}: {
  handleCardCompanyClick: (cardCompany: CardCompanyType) => void;
}) => {
  return (
    <div>
      {mockCardCompany.map((card) => (
        <CardCompanyOption
          onClick={() => handleCardCompanyClick(card)}
          cardCompany={card}
        />
      ))}
    </div>
  );
};

export default CardCompanyOptionList;
