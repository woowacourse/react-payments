import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardListContext } from "context/CardListProvider";
import CardEditor from "components/CardEditor";
import { PageWrapper } from "./style";

function Edit() {
  const { id } = useParams();
  const [originData, setOriginDate] = useState();

  const cardList = useContext(CardListContext);

  useEffect(() => {
    const targetCard = cardList.find(
      (card) => Number(card.cardId) === Number(id)
    );

    setOriginDate(targetCard);
  }, [id, cardList]);

  return (
    <PageWrapper>
      {originData && <CardEditor isEdit originData={originData} />}
    </PageWrapper>
  );
}

export default Edit;
