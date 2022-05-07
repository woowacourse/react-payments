import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CardListContext } from "context/CardListProvider";
import CardEditor from "components/CardEditor";
import { ERROR_MESSAGES } from "constant";
import { PageWrapper } from "./style";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginDate] = useState();
  const cardList = useContext(CardListContext);

  useEffect(() => {
    const targetCard = cardList.find((card) => Number(card.id) === Number(id));

    if (!targetCard) {
      alert(ERROR_MESSAGES.NOT_EXIST_CARD);
      navigate("/", { replace: true });
      return;
    }

    setOriginDate(targetCard);
  }, [id, cardList]);

  return (
    <PageWrapper>
      {originData && <CardEditor isEdit originData={originData} />}
    </PageWrapper>
  );
}

export default Edit;
