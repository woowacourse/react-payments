import { BANK_LIST } from "src/utils/constant";
import { Styled as S } from "./CardCompany.styles";
import useCardCompanySelect from "src/hooks/useCardCompanySelect";

interface Props {
  closeEvent: () => void;
}

function CardCompany({ closeEvent }: Props) {
  const { cardClickHandler } = useCardCompanySelect({ closeEvent });

  const cardLists = BANK_LIST.map((list) => {
    return (
      <S.CardContainer>
        <img
          id={list.id}
          src={list.src}
          alt={list.name}
          onClick={cardClickHandler}
        />
        <p>{list.name}</p>
      </S.CardContainer>
    );
  });

  return <S.WholeCardContainer>{cardLists}</S.WholeCardContainer>;
}

export default CardCompany;
