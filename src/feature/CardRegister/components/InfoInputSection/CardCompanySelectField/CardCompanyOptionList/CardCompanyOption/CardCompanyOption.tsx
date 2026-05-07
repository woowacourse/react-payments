import type { CardCompanyType } from "../../../../../../../common/types/CardCompany";

const CardCompanyOption = ({
  onClick,
  cardCompany,
}: {
  onClick: () => void;
  cardCompany: CardCompanyType;
}) => {
  return (
    <button type="button" onClick={onClick}>
      {cardCompany}
    </button>
  );
};

export default CardCompanyOption;
